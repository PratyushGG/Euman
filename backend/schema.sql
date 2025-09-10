-- Contributors table
CREATE TABLE contributors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  background VARCHAR(100) NOT NULL,
  motivation TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Labs/Enterprise table  
CREATE TABLE labs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  industry VARCHAR(255) NOT NULL,
  dataset_needs TEXT NOT NULL,
  budget VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contributors ENABLE ROW LEVEL SECURITY;
ALTER TABLE labs ENABLE ROW LEVEL SECURITY;

-- Create policies (allow insert for all users, restrict read/update/delete to authenticated users)
CREATE POLICY "Allow insert for contributors" ON contributors
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow insert for labs" ON labs
  FOR INSERT
  TO anon
  WITH CHECK (true);