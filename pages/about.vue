<template>
  <div>
    <Breadcrumb :title="title" />
    <FeaturesWrapper />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "درباره ما",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات درباره ما در این قسمت",
        },
      ],
    };
  },
};
</script>