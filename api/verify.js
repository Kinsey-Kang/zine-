const VALID_PASSWORDS = new Set(['a123', 'b456', 'c789', 'd000']);
const usedPasswords = new Set();

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const { password } = req.body;
  if (!password || typeof password !== 'string') return res.status(400).json({ success: false, error: 'Password required' });

  const pwd = password.trim().toLowerCase();
  if (usedPasswords.has(pwd)) return res.status(401).json({ success: false, error: '密码已失效' });
  if (!VALID_PASSWORDS.has(pwd)) return res.status(401).json({ success: false, error: 'Invalid password' });

  usedPasswords.add(pwd);
  return res.status(200).json({ success: true });
}
