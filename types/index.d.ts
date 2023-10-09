export interface Player {
  id: number,
  name: string
  jerseyNumber: number,
  age: number,
  nationality: string,
  pace: number,
  shooting: number,
  passing: number,
  dribbling: number,
  defending: number,
  physicality: number,
  club_id: number,
  club: Club
  league_id: number,
}

export interface Club {
  id: number,
  name: string,
  nationality: string,
  league: string,
  place_in_table: number,
  league_id: number,
}
