function isAnagram(s: string, t: string): boolean { 
  if(s.length !== t.length) return false;

  const newS :string[] = s.split("").sort();
  const newT :string[] = t.split("").sort();

  for(let i:number = 0 ;i < newS.length; i++){
      if(newS[i] !== newT[i]) return false;
  }
  
  return true;
};