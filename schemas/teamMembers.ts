import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMembers',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of team member',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'blockContent',
      description: 'Add introductions here. Use "Shift + Enter" to add spaces between paragraphs.',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'displayPicture',
      title: 'Display Picture',
      type: 'image',
      description: 'Image of team member',
      validation: (Rule) => Rule.required(),
      fields: [ {
        name: 'alt',
        title: 'Alt Text',
        type: 'string'
        }
      ]
    }),
  ]
})
