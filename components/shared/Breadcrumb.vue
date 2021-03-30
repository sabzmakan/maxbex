<template>
  <section class="page-title">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">صفحه اصلی</a></li>
        <li class="breadcrumb-item"><a href="#">آخرین اخبار</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ title }}
        </li>
      </ol>
    </nav>
    <div class="text-center px-3">
      <h1 class="title_up">{{ title }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title"],
};
</script>