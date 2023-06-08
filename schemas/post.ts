import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of project',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL of project',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      description: 'Image displayed for project preview',
      validation: (Rule) => Rule.required(),
      fields: [ {
        name: 'alt',
        title: 'Alt Text',
        type: 'string'
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      description: 'Project category for filters',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'projectDate',
      title: 'Project Date',
      type: 'string',
      description: 'Format (MM YYYY): Sep 2021',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: 'Main copy of the project. Use "Shift + Enter" to add spaces between paragraphs.',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'information',
      title: 'Information',
      type: 'blockContent',
      description: 'Additional information of project. Use "Shift + Enter" to add spaces between paragraphs.',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'Photos can be uploaded by batch in the Media tab',
      validation: (Rule) => Rule.required(),
      of: [{
        type: 'image',
        fields: [ {
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string'
        }],
      }]
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'headerImage',
    }
  },
})
