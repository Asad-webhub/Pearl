import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client lazily or safely
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Pearl Trinity API' });
  });

  // AI Consultation & Strategy Generator Endpoint
  app.post('/api/ai-consult', async (req, res) => {
    try {
      const { industry, companyType, goals, customPrompt } = req.body;

      const ai = getAiClient();
      if (!ai) {
        return res.status(200).json({
          success: true,
          isFallback: true,
          recommendation: {
            title: `Digital Transformation Strategy for ${industry || 'Your Business'}`,
            summary: `Based on your goal to "${goals || 'Accelerate Business Growth'}", Pearl Trinity recommends an integrated cloud and software ecosystem customized for ${companyType || 'Growing Enterprises'}.`,
            keySolutions: [
              'Custom Enterprise Application with scalable API integration',
              'AI-powered Intelligent Automation & Predictive Analytics',
              'Secure Cloud Infrastructure Migration & Management',
              'Modern Responsive Web & Mobile Customer Portal'
            ],
            estimatedTimeline: '6 - 12 weeks',
            nextSteps: 'Schedule a discovery session with our Lead Solutions Architect for a detailed technical roadmap.'
          }
        });
      }

      const prompt = `
You are the Chief Technology Architect at Pearl Trinity (PEARL TRINITY SDN. BHD.), a premier Malaysia-based technology solutions company specializing in Software Development, AI Innovation & Digital Transformation.

Client Request Context:
- Industry: ${industry || 'General Business'}
- Company Type: ${companyType || 'Enterprise / Startup'}
- Primary Goals: ${goals || 'Digital Transformation & Automation'}
- Additional Details / User Prompt: ${customPrompt || 'None specified'}

Provide a high-level, professional, concise, and structured digital transformation roadmap recommendation.
Format your output strictly as a valid JSON object with the following fields:
{
  "title": "Strategy Title",
  "summary": "Executive summary paragraph tailored to the client's industry and goals",
  "keySolutions": [
    "Solution 1 (e.g. AI & Intelligent Automation feature)",
    "Solution 2 (e.g. Custom Software / Cloud feature)",
    "Solution 3 (e.g. Mobile & UX design feature)",
    "Solution 4 (e.g. System Integration / Security feature)"
  ],
  "estimatedTimeline": "e.g. 8 - 12 Weeks",
  "techStack": ["React", "Node.js", "Python AI", "AWS/GCP Cloud", "Docker"],
  "businessImpact": "Brief expected ROI or efficiency improvement summary",
  "nextSteps": "Actionable recommendation for Phase 1 Discovery"
}
Ensure response is raw valid JSON without markdown formatting.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const responseText = response.text || '';
      let jsonResult;
      try {
        jsonResult = JSON.parse(responseText.replace(/```json/g, '').replace(/```/g, '').trim());
      } catch (e) {
        jsonResult = {
          title: `Digital Transformation for ${industry || 'Your Enterprise'}`,
          summary: responseText || 'Custom digital transformation roadmap designed by Pearl Trinity engineering team.',
          keySolutions: [
            'Custom Software Development & API Integration',
            'AI-Powered Automation & Analytics Platform',
            'Scalable Cloud Infrastructure'
          ],
          estimatedTimeline: '8 - 12 weeks',
          techStack: ['TypeScript', 'Python AI', 'Cloud Services'],
          businessImpact: '35% average increase in operational efficiency',
          nextSteps: 'Book a 30-minute consultation call with Pearl Trinity architects.'
        };
      }

      res.json({ success: true, isFallback: false, recommendation: jsonResult });
    } catch (error: any) {
      console.error('AI Consult Error:', error);
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to generate strategy'
      });
    }
  });

  // Contact form submission endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, phone, company, serviceInterest, message } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }

    res.json({
      success: true,
      referenceId: `PT-${Math.floor(100000 + Math.random() * 900000)}`,
      message: 'Thank you for reaching out to Pearl Trinity. Our solutions team will respond within 24 hours.'
    });
  });

  // Vite middleware for dev or static files for prod
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Pearl Trinity server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
