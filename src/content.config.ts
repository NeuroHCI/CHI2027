import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const commonFields = {
  title: z.string(),
  description: z.string(),
  meta_title: z.string().optional(),
  date: z.date().optional(),
  image: z.string().optional(),
  draft: z.boolean(),
};

// Post collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/authors" }),
  schema: z.object({
    ...commonFields,
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    ...commonFields,
  }),
});

// about collection schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    ...commonFields,
  }),
});

// contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    ...commonFields,
  }),
});

// Homepage collection schema
// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      subtitle: z.string(),
      date: z.string(),
      time: z.string(),
      location: z.string(),
      content: z.string(),
      image: z.string(),
      image_alt: z.string(),
      image_caption: z.string(),
      status: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
      button2: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }).optional(),
    }),
    overview: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
    }),
    agenda: z.object({
      title: z.string(),
      description: z.string().optional(),
      items: z.array(
        z.object({
          time: z.string(),
          title: z.string(),
          speaker: z.string().optional(),
          description: z.string().optional(),
        })
      ),
    }),
    participation: z.object({ title: z.string(), content: z.string() }),
    stickers: z.object({ title: z.string(), content: z.string(), image: z.string(), caption: z.string(), image_alt: z.string() }),
    organizers: z.object({
      title: z.string(),
      members: z.array(
        z.object({
          name: z.string(),
          role: z.string(),
          image: z.string().optional(),
          bio: z.string().optional(),
          link: z.string().optional(),
          linkedin: z.string().optional(),
          twitter: z.string().optional(),
        })
      ),
    }),
    contact: z.object({
      title: z.string(),
      description: z.string(),
      email: z.string(),
      button: z.object({
        label: z.string(),
        link: z.string(),
      }),
    }),
  }),
});

// Call to Action collection schema
const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

// Testimonials Section collection schema
const testimonialSectionCollection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        avatar: z.string(),
        designation: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

// Export collections
export const collections = {
  // Pages
  homepage: homepageCollection,
  blog: blogCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  about: aboutCollection,
  contact: contactCollection,

  // sections
  ctaSection: ctaSectionCollection,
  testimonialSection: testimonialSectionCollection,
};
