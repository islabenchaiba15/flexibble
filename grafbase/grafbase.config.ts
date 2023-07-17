import { g, auth, config } from '@grafbase/sdk'

const Project=g.model('Project',{
  title:g.string().length({min:3}),
  description:g.string(),
  image:g.url(),
  liveSiteUrl:g.url(),
  category:g.string().search(),
  createdBy:g.relation(()=>User)
})

const User = g.model('User', {
  name:g.string().length({min:2,max:20}),
  email:g.string().unique(),
  avatarUrl:g.string(),
  description:g.string().optional(),
  githubUrl:g.url().optional(),
  LinkedInUrl:g.url().optional(),
  projects: g.relation(()=>Project).optional().list(),

})

export default config({
  schema: g

})
