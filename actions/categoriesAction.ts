"use server";
import { prisma } from "@/prisma/prisma";
import { slugify } from "@/utils/helpers";

// Fetch all categories or a category by slug
export async function getCategories(slug?: string) {
  let category;
  try {
    if (slug) {
      // Fetch a single category by slug
      category = await prisma.category.findMany({
        where: { slug },
      });

      if (!category) {
        return { error: "Category not found", status: 404 };
      }
    } else {
      // Fetch all categories
      category = await prisma.category.findMany({
        orderBy: { id: "desc" },
      });
    }
    return { data: category, status: 200 };
  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error", status: 500 };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}

export async function getCategoriesBySlug(slug: string) {
  let category;
  try {
    if (slug) {
      // Fetch a single category by slug
      category = await prisma.category.findMany({
        where: { slug },
      });

      if (!category) {
        return { error: "Category not found", status: 404 };
      }
    }
    return { data: category, status: 200 };
  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error", status: 500 };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}

// Create a new category
export async function createCategory(data: {
  name: string;
  thumbnail: string;
}) {
  try {
    if (!data.name) {
      return { error: "Name is required", status: 400 };
    }

    const slug = slugify(data.name);
    const category = await prisma.category.create({
      data: { name: data.name, slug, thumbnail: data.thumbnail },
    });

    return { data: category, status: 201 };
  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error", status: 500 };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}

// Update an existing category
export async function updateCategory(data: {
  slug: string;
  name: string;
  thumbnail?: string;
}) {
  try {
    if (!data.name) {
      return { error: "Name is required", status: 400 };
    }

    const existingCategory = await prisma.category.findUnique({
      where: { slug: data.slug },
    });

    if (!existingCategory) {
      return { error: "Category not found", status: 404 };
    }

    const newSlug = slugify(data.name);
    const updatedCategory = await prisma.category.update({
      where: { slug: data.slug },
      data: { name: data.name, slug: newSlug, thumbnail: data.thumbnail },
    });

    return { data: updatedCategory, status: 201 };
  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error", status: 500 };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}

// Delete a category
export async function deleteCategory(slug: string) {
  try {
    const existingCategory = await prisma.category.findUnique({
      where: { slug },
    });

    if (!existingCategory) {
      return { error: "Category not found", status: 404 };
    }

    const deletedCategory = await prisma.category.delete({ where: { slug } });

    return { data: deletedCategory, status: 200 };
  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error", status: 500 };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}

export async function getCategoryCount() {
  try {
    const count = (await getCategories()).data || [];
    return { data: count?.length || 0, status: 200 };
  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error", status: 500 };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}
