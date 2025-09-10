from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

app = FastAPI(title="Human Trace Lab API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://human-trace-lab.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_ANON_KEY")
supabase: Client = create_client(url, key)

class ContributorForm(BaseModel):
    name: str
    email: EmailStr
    background: str
    motivation: str

class LabForm(BaseModel):
    company_name: str
    role: str
    industry: str
    dataset_needs: str
    budget: Optional[str] = None
    email: EmailStr

@app.get("/")
async def root():
    return {"message": "Human Trace Lab API"}

@app.post("/submit-contributor")
async def submit_contributor(form: ContributorForm):
    try:
        result = supabase.table("contributors").insert({
            "name": form.name,
            "email": form.email,
            "background": form.background,
            "motivation": form.motivation
        }).execute()
        
        return {"message": "Contributor submission successful", "id": result.data[0]["id"]}
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Submission failed: {str(e)}")

@app.post("/submit-lab")
async def submit_lab(form: LabForm):
    try:
        result = supabase.table("labs").insert({
            "company_name": form.company_name,
            "role": form.role,
            "industry": form.industry,
            "dataset_needs": form.dataset_needs,
            "budget": form.budget,
            "email": form.email
        }).execute()
        
        return {"message": "Lab submission successful", "id": result.data[0]["id"]}
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Submission failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)