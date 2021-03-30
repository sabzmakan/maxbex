<template>
  <aside class="search-aside">
    <div class="widget-pages sticky-top">
      <div class="widget-header">جستجو</div>
      <div class="widget-body">
        <form action="." class="needneeds-validation row" method="POST">
          <div class="form-group col-6 col-lg-12">
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="دنبال چی میگردی؟"
            />
          </div>
          <div class="form-group col-6 col-lg-12">
            <select class="form-control select2" name="category" id="category">
              <option value="0">در کدام دسته بندی؟</option>
              <option value="1">ارز های دیجیتال</option>
              <option value="2">آکادمی</option>
            </select>
          </div>
          <div class="form-group mb-0 col-12">
            <input
              type="submit"
              class="btn btn-default"
              name="submit"
              value="بروز رسانی"
            />
          </div>
        </form>
      </div>
    </div>
  </aside>
</template>

<script>
export default {};
</script>