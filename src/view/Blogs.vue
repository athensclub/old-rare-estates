<template>
  <v-container fluid class="base-page">
    <v-col>
      <h1 class="mx-1">Blogs</h1>
      <v-list color="black" style="overflow-y: hidden">
        <v-list-item v-for="(blog, i) in blogs" :key="'blog-list-item' + i">
          <template v-if="$vuetify.breakpoint.smAndDown">
            <v-col
              class="pa-0 pb-8"
              :class="{ 'mt-10': i != 0, 'mt-2': i == 0 }"
              :style="{
                'border-bottom':
                  i == blogs.length - 1 ? undefined : '1px solid #7f7f7f',
              }"
            >
              <v-img
                class="rounded-lg"
                style="border: 1px solid #9c9bac;"
                :src="blog.image"
                :aspect-ratio="1.3"
                width="100%"
              ></v-img>

              <BlogItemContent
                class="mt-2"
                :title="blog.title"
                :date="blog.date"
                :text="blog.text"
                :url="blog.url"
              />
            </v-col>
          </template>

          <v-row
            v-else
            class="pb-8 flex-nowrap"
            :class="{ 'mt-10': i != 0, 'mt-2': i == 0 }"
            :style="{
              'border-bottom':
                i == blogs.length - 1 ? undefined : '1px solid #7f7f7f',
            }"
          >
            <v-img
              class="rounded-lg"
              style="border: 1px solid #9c9bac;"
              :src="blog.image"
              :aspect-ratio="1.3"
              width="35%"
            ></v-img>

            <BlogItemContent
              :title="blog.title"
              :date="blog.date"
              :text="blog.text"
              :url="blog.url"
            />
          </v-row>
        </v-list-item>
      </v-list>
    </v-col>

    <BottomFooter />
  </v-container>
</template>

<script>
import BlogItemContent from "../components/BlogItemContent.vue";
import BottomFooter from "../components/BottomFooter.vue";
export default {
  data: () => ({
    blogs: [
      {
        image:
          "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        title: "Article Name",
        date: "30 Feb 2021",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget ",
        url: "https://www.example.com",
      },
      {
        image:
          "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        title: "Article Name",
        date: "30 Feb 2021",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget ",
        url: "https://www.example.com",
      },
      {
        image:
          "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        title: "Article Name",
        date: "30 Feb 2021",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget ",
        url: "https://www.example.com",
      },
      {
        image:
          "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        title: "Article Name",
        date: "30 Feb 2021",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget ",
        url: "https://www.example.com",
      },
    ],
  }),
  components: {
    BottomFooter,
    BlogItemContent,
  },
};
</script>

<style scoped></style>
