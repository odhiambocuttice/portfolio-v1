import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  fields: [
    {
      name: 'name',
      type: "text",
      label: 'Name',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
      required: true,
    },
    {
      name: 'technology',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Django',
          value: 'django',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'PostgreSQL',
          value: 'postgresql',
        },
        {
          label: 'React',
          value: 'react',
        },
        {
          label: 'Next.js',
          value: 'nextjs',
        },
        {
          label: 'TypeScript',
          value: 'typescript',
        },
        {
          label: 'Tailwind CSS',
          value: 'tailwindcss',
        },
        {
          label: 'Figma',
          value: 'figma',
        },
        {
          label: 'Canva',
          value: 'canva',
        },
        {
          label: 'Adobe Illustrator',
          value: 'adobeillustrator',
        },
        {
          label: 'Photoshop',
          value: 'photoshop',
        },
        {
          label: 'Adobe Lightroom',
          value: 'adobelightroom',
        },
        {
          label: 'Adobe Photoshop',
          value: 'adobephotoshop',
        },
        {
          label: 'Canon DSLR',
          value: 'canondslr',
        },
        {
          label: 'ShadCn',
          value: 'shadcn',
        },
        {
          label: 'PayloadCMS',
          value: 'payloadcms',
        },
        {
          label: 'Docker',
          value: 'docker'
        },

      ],
      hasMany: true,
    },
    {
      name: 'size',
      type: 'select',
      required: true,
      options: [
        {
          label: 'col-span-1',
          value: 'col-span-1',
        },
        {
          label: 'col-span-2',
          value: 'col-span-2',
        },
      ],
      hasMany: false,
    },
    {
      name: 'color',
      type: 'select',
      required: true,
      options: [
        {
          label: 'from-emerald-900 to-emerald-950',
          value: 'from-emerald-900 to-emerald-950',
        },
        {
          label: 'from-blue-900 to-blue-950',
          value: 'from-blue-900 to-blue-950',
        },
        {
          label: 'from-red-900 to-red-950',
          value: 'from-red-900 to-red-950',
        },
        {
          label: 'from-purple-900 to-purple-950',
          value: 'from-purple-900 to-purple-950',
        },
        {
          label: 'from-cyan-900 to-cyan-950',
          value: 'from-cyan-900 to-cyan-950',
        },
      ],
      hasMany: false,
    },
  ],
}
