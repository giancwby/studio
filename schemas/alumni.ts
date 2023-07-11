import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'alumni',
  title: 'Alumni',
  type: 'document',
  fields: [
    defineField({
      name: 'alumniMembers',
      title: 'Alumni Members',
      type: 'string',
      description: 'Names of alumni team members',
      validation: (Rule) => Rule.required()
    })
  ]
})
