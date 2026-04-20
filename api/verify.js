// 500 passwords total
const VALID_PASSWORDS = new Set([
  // Original 4
  'a123', 'b456', 'c789', 'd000',
  // Additional 496 random passwords
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
  '2tfm', 'c8np', 'm1pk', 'p9mp', 'k3sv', 'g7tf', 'n5np', 'j4pk',
  '9mvn', 'r4tw', 'k8qb', 'f1ps', 'x6zl', 'd3hm', 'v7np', 'w5gq',
  '1tbf', 'q8np', 'p4cl', 'g9sf', 'n2wb', 'm6tk', 'h3pv', 'j8fl',
  '2cwb', 'r5tf', 's9np', 'k1wb', 'g4mp', 'v8tf', 'w2np', 'x7pk',
  '3npw', 'q6mp', 'p2wb', 'n9tf', 'm5tf', 'd8pk', 'h1mp', 'j7tf',
  '4tfp', 'k9np', 'g8wb', 'v6mp', 'w1tf', 'x4pk', 'c9tf', 'p7np',
  '5twb', 'm2np', 'r8tf', 'v4pk', 's3np', 'q9tf', 'w6pk', 'x1tf',
  '6npq', 'g5mp', 'k3wb', 'f9tf', 'd2pk', 'c7mp', 'p8tf', 'h4np',
  '7pkq', 'v3pk', 'w5np', 'x8mp', 'y2tf', 'c6pk', 'm9np', 'k5tf',
  '8tfp', 'r1mp', 's7pk', 'g6np', 'p4tf', 'h8pk', 'j2mp', 'd9tf',
  '9pkx', 'v2mp', 'w7tf', 'x3pk', 'y5np', 'c8tf', 'm1mp', 'k9pk',
  '1tqv', 'q4np', 'p7tf', 'g3pk', 'n6mp', 'v9tf', 'w8np', 'x2mp',
  '2npr', 'k8wb', 'f5tf', 'd1pk', 'c4mp', 'p9tf', 'h6pk', 'j3wb',
  '3mpz', 'v1pk', 'w9tf', 'x4np', 'y7tf', 'c2pk', 'm8np', 'k6tf',
  '4tfq', 'r2np', 's8pk', 'g9mp', 'p5tf', 'h1pk', 'j7mp', 'd8tf',
  '5pkp', 'q3pk', 'v6tf', 'w4mp', 'x8tf', 'y1pk', 'c9np', 'm7tf',
  '6tfw', 'k9tf', 'f4pk', 'd6tf', 'c1pk', 'p2tf', 'h8mp', 'j5tf',
  '7mpn', 'r1tf', 's3pk', 'g2tf', 'p9pk', 'v4mp', 'w7tf', 'x5pk',
  '8pkw', 'q6mp', 'p1tf', 'k4tf', 'n8pk', 'v2tf', 'w9mp', 'c3tf',
  '9tfm', 'k7pk', 'f8tf', 'd5pk', 'h4tf', 'j1mp', 'g6tf', 'p4mp',
  '1mpv', 'r9pk', 's5tf', 'g3tf', 'v7tf', 'c4tf', 'm9pk', 'k2mp',
  '2tfz', 'q8mp', 'p6tf', 'n1pk', 'h9tf', 'j4tf', 'v5pk', 'w3mp',
  '3pkv', 'k5tf', 'f2mp', 'd9tf', 'c7pk', 'p3tf', 'h6pk', 'j8mp',
  '4tfp', 'r3tf', 's9mp', 'g8pk', 'p5mp', 'v1tf', 'w4pk', 'x9mp',
  '5mpq', 'q9tf', 'p2pk', 'n4mp', 'v8tf', 'w6pk', 'c2mp', 'm5tf',
  '6pkq', 'k9mp', 'f6tf', 'd3mp', 'c8mp', 'p1tf', 'h7tf', 'j2mp',
  '7tfp', 'r4pk', 's6mp', 'g9tf', 'v3tf', 'c5tf', 'm1pk', 'k8tf',
  '8mpq', 'q2tf', 'p7pk', 'n9pk', 'h4tf', 'j9pk', 'v6mp', 'w3tf',
  '9pkp', 'k7tf', 'f4mp', 'd2mp', 'c9mp', 'p8pk', 'h5mp', 'j1mp',
  '1pkp', 'r8mp', 's3tf', 'g2pk', 'v9tf', 'c6pk', 'm4tf', 'k1tf',
  '2tfm', 'q6mp', 'p8mp', 'n4mp', 'h9mp', 'j1mp', 'v2mp', 'w9mp',
  '3mpk', 'k5mp', 'f1mp', 'd7mp', 'c2mp', 'p9mp', 'h6mp', 'j5mp',
  '4pkf', 'r3mp', 's7mp', 'g8mp', 'p4mp', 'v4mp', 'w2mp', 'x5mp',
  '5mpv', 'q9mp', 'p6mp', 'n1mp', 'v8mp', 'w4mp', 'c6mp', 'm7mp',
  '6pkq', 'k8mp', 'f4mp', 'd3mp', 'c5mp', 'p2mp', 'h7mp', 'j3mp',
  '7mpt', 'r1mp', 's5mp', 'g9mp', 'v6mp', 'c8mp', 'm3mp', 'k1mp',
  '8pkp', 'q2mp', 'p7mp', 'n5mp', 'h1mp', 'j7mp', 'v5mp', 'w7mp',
  '9mpf', 'k6mp', 'f1mp', 'd9mp', 'h4mp', 'j2mp', 'g1mp', 'p8mp',
  '1pkp', 'r5mp', 's2mp', 'g9mp', 'c7mp', 'm4mp', 'k2mp', 'v3mp',
  '2mpq', 'q8mp', 'p4mp', 'n1mp', 'v9mp', 'w6mp', 'c2mp', 'm8mp',
  '3pkv', 'k4mp', 'f7mp', 'd5mp', 'c1mp', 'p3mp', 'h9mp', 'j5mp',
  '4mpp', 'r2mp', 's8mp', 'g6mp', 'p4mp', 'v1mp', 'w9mp', 'x3mp',
  '5pkq', 'q6mp', 'p1mp', 'n7mp', 'h3mp', 'j9mp', 'v6mp', 'w2mp',
  '6mpw', 'k8mp', 'f3mp', 'd2mp', 'c8mp', 'p5mp', 'h1mp', 'j7mp',
  '7pkf', 'r4mp', 's6mp', 'g1mp', 'v9mp', 'c5mp', 'm1mp', 'k9mp',
  '8mpk', 'q3mp', 'p8mp', 'n5mp', 'h6mp', 'j2mp', 'v4mp', 'w8mp',
  '9pkw', 'k7mp', 'f5mp', 'd8mp', 'c9mp', 'p6mp', 'h3mp', 'j1mp',
  '1mkp', 'r2mp', 's5mp', 'g8mp', 'v2mp', 'c4mp', 'm7mp', 'k1mp',
  '2pkq', 'q9mp', 'p7mp', 'n3mp', 'h8mp', 'j4mp', 'v5mp', 'w3mp',
  '3mpk', 'k5mp', 'f2mp', 'd1mp', 'c6mp', 'p9mp', 'h5mp', 'j7mp',
  '4pkw', 'r1mp', 's3mp', 'g4mp', 'p6mp', 'v7mp', 'w1mp', 'x9mp',
  '5mkp', 'q8mp', 'p2mp', 'n9mp', 'h1mp', 'j6mp', 'v3mp', 'w5mp',
  '6mpz', 'k4mp', 'f8mp', 'd7mp', 'c1mp', 'p5mp', 'h9mp', 'j2mp',
  '7pkw', 'r6mp', 's1mp', 'g9mp', 'v2mp', 'c3mp', 'm8mp', 'k9mp',
  '8mpp', 'q2mp', 'p7mp', 'n1mp', 'h5mp', 'j8mp', 'v4mp', 'w6mp',
  '9pkf', 'k1mp', 'f4mp', 'd2mp', 'c7mp', 'p3mp', 'h6mp', 'j1mp'
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
