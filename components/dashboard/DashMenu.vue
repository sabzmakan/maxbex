<template>
  <aside>
    <ul>
      <li class="active">
        <NuxtLink to="/dashboard">
          <i class="far fa-user"></i> 
          <span>داشبورد</span>
        </NuxtLink>
      </li>
       <!-- <li>
        <NuxtLink to="/dashboard/new-dashboard">
          <i class="far fa-user"></i>
          <span>داشبورد جدید</span> 
        </NuxtLink>
      </li> -->
      <!-- <li>
        <a href="#">
          <i class="far fa-shield-check"></i>
          <span>امنیت</span>
        </a>
      </li> -->
      <li>
        <NuxtLink to="/dashboard/market">
          <i class="far fa-bullseye-pointer"></i>
          <span>بازار</span>
         </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard/chart">
          <i class="far fa-chart-line"></i>
          <span>صفحه Trade</span>
        </NuxtLink>
      </li>
           <li>
        <NuxtLink to="/dashboard/account-details">
          <i class="far fa-coin"></i>
          <span>گزارش اکانت</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard/setting">
          <i class="far fa-sliders-v"></i>
          <span>تنظیمات پروفایل</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard/apikey">
          <i class="far fa-key"></i>
          <span>اکانت ها</span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>