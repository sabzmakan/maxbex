<template>
  <section class="contact-wrapper">
    <Breadcrumb :title="title" />
    <!-- <div class="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3962907367672!2d51.30481784095104!3d35.76390318070462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfcd608220baf%3A0x58c9a8ee1b897b89!2sAti%20Tower!5e0!3m2!1sen!2s!4v1609316512867!5m2!1sen!2s"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div> -->
    <div class="container pb-5">
      <div class="row">
        <div class="col-md-6">
          <div class="contact-box mb-4 mb-md-0">
            <div class="head">
              <i class="far fa-comments"></i>
              <span>فرم تماس</span>
            </div>
            <div class="body">
              <form
                class="row needs-validation"
                action="."
                method="POST"
                novalidate
              >
                <div class="col-sm-6 form-group">
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="نام و نام خانوادگی *"
                    required
                  />
                  <div class="valid-feedback">اعتبار سنجی شد!</div>
                  <div class="invalid-feedback">نام خود را درست بنویسید</div>
                </div>
                <div class="col-sm-6 form-group">
                  <input
                    class="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ایمیل"
                  />
                  <div class="valid-feedback">اعتبار سنجی شد!</div>
                  <div class="invalid-feedback">ایمیل خود را درست بنویسید</div>
                </div>
                <div class="col-sm-6 form-group">
                  <input
                    class="form-control"
                    type="number"
                    name="phonenumber"
                    id="phonenumber"
                    placeholder="شماره موبایل *"
                    required
                  />
                  <div class="valid-feedback">اعتبار سنجی شد!</div>
                  <div class="invalid-feedback">
                    شماره موبایل باید ۱۱ رقم باشد
                  </div>
                </div>
                <div class="col-sm-6 form-group">
                  <input
                    class="form-control"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="موضوع"
                  />
                  <div class="valid-feedback">اعتبار سنجی شد!</div>
                  <div class="invalid-feedback">موضوع را ننوشتید</div>
                </div>
                <div class="col-12 form-group">
                  <textarea
                    class="form-control"
                    name="content"
                    id="content"
                    placeholder="متن خود را اینجا بنویسید... *"
                    required
                  ></textarea>
                  <div class="valid-feedback">اعتبار سنجی شد!</div>
                  <div class="invalid-feedback">محتوا نباید خالی باشد</div>
                </div>
                <div class="col-12 form-group mb-0">
                  <button type="submit" class="btn btn-default">
                    ثبت و ارسال
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="contact-box">
            <div class="head">
              <i class="far fa-phone"></i>
              <span>اطلاعات تماس</span>
            </div>
            <div class="body">
              <!-- <p>
                <strong>نشانی:</strong>
                تهران - جنت آباد شمالی - تقاطع ایران پارس - جنب برج آتی - پلاک
                ۲۰ - طبقه ۳ - واحد ۳
              </p> -->
              <p>
                <strong>موبایل:</strong>
                <a href="tel:+989018503032" class="ltr-text">۰۹۰۱ ۸۵۰ ۳۰ ۳۲</a>
              </p>
              <p>
                <strong>ثابت:</strong>
                <a href="tel:+982191002191" class="ltr-text">۰۲۱ ۹۱ ۰۰۲۱ ۹۱</a>
              </p>
              <p>
                <strong>ایمیل:</strong>
                <a href="mailto:info@maxbex.com" class="ltr-text"
                  >info@maxbex.com</a
                >
              </p>
              <p>
                <strong>ساعات پاسخگویی:</strong>
                ۷ روز هفته، ۲۴ ساعته
              </p>
              <ul class="social">
                <li>
                  <a
                    href="https://www.instagram.com/officialmaxbex/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ripple="ripple"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/maxbex/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ripple="ripple"
                    ><i class="fab fa-linkedin"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "تماس با ما",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات تماس با ما در این قسمت",
        },
      ],
    };
  },
};
</script>