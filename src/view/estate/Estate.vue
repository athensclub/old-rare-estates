<template>
  <v-container
    fluid
    class="base-page ma-0 pa-0"
    :class="{
      'fill-height': !$vuetify.breakpoint.smAndDown,
    }"
    style="max-height: 100vh; overflow-y: hidden"
  >
    <template v-if="!$vuetify.breakpoint.smAndDown">
      <EstatePageImageAndVirtualView
        class="fill-height"
        style="border-right: 1px solid #7f7f7f"
        :images="images"
      />

      <v-col class="pt-2 mt-16 px-0 fill-height" ref="infoAndBuyContainer">
        <EstatePageInfoColumn
          style="height: 65vh; overflow-y: auto"
          @toggle-like="userLiked = !userLiked"
          :name="name"
          :description="description"
          :price="price"
          :like="like"
          :owner="owner"
          :creator="creator"
          :userLiked="userLiked"
          :tags="tags"
        />
        <EstatePageBuyEstateColumn
          style="height: 23vh"
          :name="name"
          :owner="owner"
          :serviceFee="serviceFee"
          :price="price"
          :image="images[0]"
        />
      </v-col>
    </template>

    <template v-else>
      <v-col style="overflow-y: auto; height: 75vh">
        <EstatePageImageAndVirtualView :images="images" />
        <EstatePageInfoColumn
          style="overflow-y: visible"
          @toggle-like="userLiked = !userLiked"
          :name="name"
          :description="description"
          :price="price"
          :like="like"
          :owner="owner"
          :creator="creator"
          :userLiked="userLiked"
          :tags="tags"
        />
      </v-col>
      <EstatePageBuyEstateColumn
        style="height: 23vh"
        :name="name"
        :owner="owner"
        :serviceFee="serviceFee"
        :price="price"
        :image="images[0]"
      />
    </template>
  </v-container>
</template>

<script>
import EstatePageBuyEstateColumn from "../../components/estate_page/EstatePageBuyEstateColumn.vue";
import EstatePageInfoColumn from "../../components//estate_page/EstatePageInfoColumn.vue";
import EstatePageImageAndVirtualView from "../../components/estate_page/EstatePageImageAndVirtualView.vue";
export default {
  data: () => ({
    name: "Estate Name Estate Name",
    price: 22.0,
    like: 123000,
    serviceFee: 2.5,
    userLiked: false,
    tags: ["Futuristic"],
    creator: "Someone",
    owner: "Somebody",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus eros et elementum blandit. Quisque varius porta nunc, efficitur cursus tellus posuere a. Sed at est lacinia, gravida dui a, accumsan lectus. Nunc gravida lectus vel felis ullamcorper pharetra. Vestibulum at consectetur ligula. Maecenas cursus aliquet magna, sed aliquet ante sollicitudin eu. Mauris tincidunt enim dolor, ut eleifend ante finibus vitae. Pellentesque tristique feugiat vehicula. Phasellus at ex interdum velit varius bibendum aliquam sit amet tortor. Praesent egestas ac sapien a semper. Proin quis felis egestas, sodales nisi id, rutrum nisl. Vestibulum quis nunc non enim fermentum gravida faucibus eget ",
    showingImage: 0,
    images: [
      "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
      "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
      "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
      "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
      "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
    ],
  }),
  components: {
    EstatePageImageAndVirtualView,
    EstatePageInfoColumn,
    EstatePageBuyEstateColumn,
  },
};
</script>

<style>
.buy-estate-dialog {
  border: 1px solid #4d4fe8;
  background-color: #231f20;
}
</style>

<style scoped></style>
