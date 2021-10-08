<script>

import CMS from 'netlify-cms-app'

const config = {
  backend: {
    name: 'github',
    repo: 'voxoco/website',
    branch: 'main',
  },
  media_folder: 'public/cms/media',
  public_folder: '/cms/media',
  collections: [
    {
      name: 'Main',
      label: 'VOXO Website',
      files: [
        {
          label: 'Team',
          name: 'Team',
          file: 'public/cms/team.json',
          fields: [
            {
              label: 'Team',
              name: 'teamList',
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Image',
                  name: 'imageUrl',
                  widget: 'image',
                },
                {
                  label: 'Role',
                  name: 'role',
                  widget: 'string',
                },
                {
                  label: 'Bio',
                  name: 'bio',
                  widget: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Blog',
          name: 'Blog',
          file: 'public/cms/blog.json',
          fields: [
            {
              label: 'Blog',
              name: 'blogList',
              widget: 'list',
              fields: [
                {
                  label: 'Date',
                  name: 'date',
                  widget: 'datetime',
                  date_format: 'MMM DD, YYYY',
                  time_format: false,
                  format: 'MMM DD, YYYY',
                },
                {
                  label: 'Category',
                  name: 'category',
                  widget: 'select',
                  options: [
                    {
                      label: 'Article',
                      value: 'Article',
                    },
                    {
                      label: 'Video',
                      value: 'Video',
                    },
                  ],
                  default: 'Article',
                },
                {
                  label: 'Author',
                  name: 'author',
                  widget: 'string',
                },
                {
                  label: 'Author Photo',
                  name: 'authorPhoto',
                  widget: 'image',
                },
                {
                  label: 'Read Time (minutes)',
                  name: 'readTime',
                  widget: 'string',
                },
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Slug',
                  name: 'slug',
                  widget: 'string',
                },
                {
                  label: 'Summary Excerpt',
                  name: 'summary',
                  widget: 'text',
                },
                {
                  label: 'Post Content',
                  name: 'content',
                  widget: 'markdown',
                },
                {
                  label: 'Cover Photo',
                  name: 'coverPhoto',
                  widget: 'image',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default {
  setup() {
    return {}
  },
  mounted() {
    CMS.init({ config })
  },
}

</script>
