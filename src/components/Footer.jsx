import React from "react";
import style from "../componentsCSS/Footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={style.contact}>
        <div className={style.contact_left}>
          <a href="https://www.uit.edu.vn/" target="_blank">
            <img
              src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png"
              alt=""
            />
            <br />
            <h2>Trường Đại học Công nghệ Thông tin</h2>
            <p>Khu phố 6, phường Linh Trung, Thủ Đức, TP.HCM</p>
            <br />
            <h3>Tầm nhìn</h3>
            <p>
              - Trường Đại học Công nghệ Thông tin là một trung tâm đào tạo đại
              học, sau đại học cung cấp nguồn nhân lực chất lượng cao, nhằm đáp
              ứng nhu cầu của thị trường lao động và phục vụ cộng đồng. <br />-
              Trường Đại học Công nghệ Thông tin là một trung tâm hàng đầu về
              nghiên cứu khoa học và chuyển giao công nghệ về công nghệ thông
              tin – truyền thông và các lĩnh vực liên quan.
            </p>
            <h3>Sứ mạng</h3>
            <p>
              Trường Đại học Công nghệ Thông tin trở thành trường đại học uy tín
              về công nghệ thông tin – truyền thông và các lĩnh vực liên quan
              trong khu vực Châu Á.
            </p>
          </a>
        </div>
        <div className={style.contact_right}>
          <div className={style.mail_phone}>
            <a href="mailto:info@.uit.edu.vn">
              {" "}
              <i className="fa-solid fa-envelope"> </i>Email: info@.uit.edu.vn
            </a>
            <a href="tel:+028372 52002">
              <i className="fa-solid fa-phone"> </i>Phone: (028) 372 52002
            </a>
          </div>

          <div className={style.contact_follow}>
            <h3>Follow us</h3>
            <a href="https://www.facebook.com/UIT.Fanpage">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://www.youtube.com/@uitchannel2305">
              <i class="fa-brands fa-youtube" style={{ color: "#c11f1f" }}></i>
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416692!2d106.80047917589597!3d10.87000888928448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1702778089831!5m2!1svi!2s"
              width={500}
              height={300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
}
