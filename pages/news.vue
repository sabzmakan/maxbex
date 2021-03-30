<template>
  <div>
    <Breadcrumb :title="title" />
    <section class="news-wrapper wrapper">
      <div class="container">
        <div class="main-content">
          <ul>
            <li v-for="post in posts.results" :key="post.index">
              <a
                v-bind:href="'http://' + post.domain"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                <h2 class="title">{{ post.title }}</h2>
                <span class="date">{{ post.domain }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <nav class="d-flex justify-content-center pt-5" aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >قبلی</a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">بعدی</a>
        </li>
      </ul>
    </nav> -->
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "صفحه اخبار",
      posts: [],
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات صفحه اخبار در این قسمت",
        },
      ],
    };
  },
  mounted() {
    this.feedcall();
  },
  methods: {
    feedcall() {
      self = this;

      try {
        axios
          .get(
            "/api/v1/posts/?auth_token=40505ff3bf8c66c74ea0ed05bb755ef00f8700ab"
          )
          .then((res) => {
            self.posts = res?.data;
            console.log("feed", res?.data);
          });
      } catch (e) {
        console.log("new2 error", e);
      }
    },
  },
};
</script>