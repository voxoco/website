<script>

import CMS from 'netlify-cms-app'

const config = {
  backend: {
    name: 'github',
    repo: 'voxoco/website',
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
          file: '/public/cms/team.json',
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
