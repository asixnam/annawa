export interface IUser {
  id: string
  name: string
  role: string // 'super' | 'admin:paud' | 'admin:sd' | 'admin:pondok' | 'user'
}
