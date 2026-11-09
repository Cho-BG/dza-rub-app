// Filled in during setup. These two values are PUBLIC by design (safe in a public repo):
// the anon key only allows what the database security rules allow.
window.CONFIG = {
  SUPABASE_URL: "https://pkkeuehljypppacyfckb.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBra2V1ZWhsanlwcHBhY3lmY2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQyMjgzNjksImV4cCI6MjEwOTgwNDM2OX0.vBc4az9jaesyjc4073J3Dcvzb2jsa5ntsQbBdmiKJkM",
};
window.CONFIG.API = window.CONFIG.SUPABASE_URL + "/functions/v1/bot";
