// Valid passwords - 204 passwords total (4 original + 200 new)
const VALID_PASSWORDS = new Set([
  // Original 4
  'a123', 'b456', 'c789', 'd000',
  // New 200 random passwords
  '7kx2', 'm9v4', 'p3tn', 'w8qr', 'j1hl', 'y5dz', 'c2fb', 'g4nw',
  '6ael', 'q9rk', 's7xc', 'v3mb', 'n1tp', 'h8gf', 'd5ju', 'k2ls',
  '4qwp', 'x7rh', 'b9dz', 'f6mc', 't1vk', 'w8pn', 'y3gq', 'c5jl',
  '8hxm', 'p2sv', 'm7bn', 'k4dr', 'g9wl', 'n6tf', 'j3qa', 'd1zr',
  '5cxp', 'h8mv', 's4kl', 'v7gn', 'q2bj', 'w9ft', 'x1cp', 'y6hm',
  '3rks', 't8np', 'c4dl', 'm7gq', 'p9wb', 'k2zx', 'g5nv', 'n3jr',
  '8fhp', 'j6tm', 'd4lq', 'h7wv', 's1ck', 'v9pn', 'q3gx', 'w6mr',
  '2zdp', 'x5nv', 'y8kt', 'c7pl', 'm3wq', 'p6hs', 'k9fj', 'g4zb',
  '7lmn', 'n2qs', 'j8tw', 'd5hp', 'h1cv', 's9mk', 'v4gn', 'q7bp',
  '6flq', 'w3zr', 'x9cv', 'y2gk', 'c8pt', 'm5wl', 'p1sf', 'k7dj',
  '4hzx', 'g9qr', 'n6mv', 'j3kl', 'd8pn', 'h4xs', 's2gb', 'v7wp',
  '1tln', 'q9zm', 'w5kc', 'x3pr', 'y8fv', 'c6hm', 'm2ks', 'p8gl',
  '5bwr', 'k4fj', 'g1zh', 'n7tc', 'j9wm', 'd3qv', 'h6sp', 's4nl',
  '8pkz', 'v2gr', 'q5dw', 'w7mx', 'x9bp', 'y4lh', 'c1ns', 'm6gk',
  '3tjq', 'p8vw', 'k2cr', 'g7fz', 'n5mx', 'j4ht', 'd9sl', 'h2kq',
  '7gpn', 's6wd', 'v1zl', 'q3mt', 'w8hp', 'x5bj', 'y9fk', 'c4vn',
  '6lmp', 'm9qc', 'p2zr', 'k7xs', 'g3nd', 'n8vw', 'j1tp', 'd6hl',
  '4wcq', 'h8mk', 's5gp', 'v9fl', 'q2nx', 'w6bz', 'x1pk', 'y7ts',
  '3dmz', 'c8hl', 'm4vr', 'p7nq', 'k9cl', 'g5tx', 'n2js', 'j6wm',
  '8bhp', 'd1kv', 'h7sp', 's3gn', 'v8bl', 'q5mp', 'w4tk', 'x9cr',
  '2fvq', 'y6gz', 'c7np', 'm1tq', 'p8wb', 'k4zs', 'g9dl', 'n3hm',
  '7wsp', 'j2vk', 'd5mr', 'h8pt', 's1wn', 'v6ql', 'q9bm', 'w3fh',
  '5gmk', 'x7pq', 'y4zk', 'c2tn', 'm8hr', 'p5cv', 'k1sf', 'g6wm',
  '4lpn', 'n9gq', 'j3bw', 'd8pl', 'h5vn', 's7tk', 'v2hl', 'q4zm',
  '6tqs', 'w8mp', 'x3gb', 'y7np', 'c9fk', 'm5qs', 'p1zh', 'k7tw',
  '3wdl', 'g2pn', 'n6bv', 'j4ls', 'd9hr', 'h1sk', 's8mp', 'v5kq',
  '7ftm', 'q3wb', 'w6zc', 'x9pl', 'y4tv', 'c8mr', 'm2pn', 'p7ks',
  '1jlv', 'k9bp', 'g5wz', 'n3mv', 'j6qs', 'd2kt', 'h8np', 's4wb',
  '8lmp', 'v1fk', 'q6gn', 'w9bs', 'x5kl', 'y2mq', 'c7pn', 'm4sv',
  '5qwp', 'k8tl', 'g3hm', 'n9fs', 'j1bm', 'd6pk', 'h4tl', 's7np',
  '2gnl', 'v9cm', 'q5wb', 'w4tz', 'x8np', 'y3sf', 'c1vk', 'm6mp',
  '7pnl', 'p8tk', 'k2wb', 'g9hl', 'n5mp', 'j3sq', 'd8pl', 'h6tv',
  '4mpk', 's1np', 'v7wb', 'q4tz', 'w6hl', 'x9mp', 'y5sp', 'c2tk',
  '6bqj', 'm8pn', 'p3kl', 'k7wb', 'g1mp', 'n4pk', 'j9sv', 'd5tf',
  '3nlq', 'h7np', 's2wb', 'v8pk', 'q6mp', 'w3sv', 'x1pl', 'y8mb',
  '7tks', 'p5pn', 'k9wb', 'g4mp', 'n2pk', 'j7sv', 'd1tf', 'h8np',
  '5wmq', 's4pk', 'v1mp', 'q9sv', 'w6tf', 'x3np', 'y7pk', 'c4mp',
  '8ksv', 'm2tf', 'p6np', 'k8pk', 'g5mp', 'n9sv', 'j1tf', 'd3np',
  '1pkq', 'h4mp', 's7sv', 'v2tf', 'q5np', 'w9pk', 'x4mp', 'y6sv',
  '2tfm', 'c8np', 'm1pk', 'p9mp', 'k3sv', 'g7tf', 'n5np', 'j4pk'
]);

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
