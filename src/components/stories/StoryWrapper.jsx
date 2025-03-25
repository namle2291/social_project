import React from "react";
import StoryItem from "./StoryItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    src: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/432980182_2069243306785530_7285726960331350315_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lujfY9gQaM4Q7kNvgEtwsz4&_nc_oc=Adka9xWeLSy1PsUwBJAhNXwu_Bdx49UHgGwmrwIaPPv5BleOe8zT3hfy71zn1ZDTKEo&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=vOoABlEnZbHt4CkSs1sb0A&oh=00_AYHVSCBfBRhePtZP5je4X57KpDaRiHVM2accOd3ZlNN67A&oe=67E8A02A",
    user: {
      avatar:
        "https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg",
    },
  },
  {
    src: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/432843863_2069244543452073_9155951562175782046_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wG1wnRuNdggQ7kNvgEYnsrS&_nc_oc=Admm9saP2eHaf_WaiLWGutW3FmRxXCxd1UvZA6DqVjtQpfvABHao1_2TpSnNOS0gILs&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=YIucd9SWnYAKMGozoQ40_w&oh=00_AYE85oAcRP1qaMzIxlWpQ2pVAsgZZEhgJw19Lb8NobTqOg&oe=67E8AC7C",
    user: {
      avatar:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/368216796_1938056006570928_5770352869226967290_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=KNIMa9X4S8UQ7kNvgHqbF4E&_nc_oc=Adl2TiU-e4-SFbbI8bRGv-7apMX0cTaJWQGgQZLxnFRWs4qEEOJnCwrjuxlSJmUgqFA&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=I70jC1qsXIMUyk6hMK3Sjg&oh=00_AYGUkvGl_RedwNoJwCKlXRTy258eSmF99Q5TckHt9580zQ&oe=67E898C3",
    },
  },
  {
    src: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/484805072_2340815376294987_1481253923399699082_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UqhyUvH9RJUQ7kNvgG69hR1&_nc_oc=AdlwgFLnQMs847mgKicKro2my6bk-6fTORaCdKw65oMJj08_5qAG_xwbgzCtFXjDNjI&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=M2EV-3KOpEEJEmnkBGEKBg&oh=00_AYGnJqBOFTKXaEph2feqscS3LEcC7SP9rDdcblQ98g_FyQ&oe=67E8A31A",
    user: {
      avatar:
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/426621131_2046350069074854_6025960451302220098_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=kHVFR9Ft3LgQ7kNvgFGpFRj&_nc_oc=AdlGgOeNQizNFjW-9ZvPAbuZnnBjMEngnatjqfFWdcd1nQVOJmz5lvB4sFzEjXHjmbY&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=a0_LaRdtGUe3BoUvsKcCXQ&oh=00_AYFkbujPVi-K8bo6BR_1Tsg1_vS8fosZhy6d-NdnCN15wg&oe=67E8A13A",
    },
  },
  {
    src: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/479040618_2312620345781157_8721036512697985887_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LrB_1dP5nhcQ7kNvgHzXrj7&_nc_oc=AdkhGrxp85SJxkfw0vlRxc1brPAKWVB6qyHZdKLcBLdIVu7VBong98_-raNNWAN21T8&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=EyiVnlm5Fk8_aDqJQqIoEQ&oh=00_AYEBhJQSHBQR4XOoEWTpqcCi5B3rFQTpdFPsiaKQCT-4_w&oe=67E89182",
    user: {
      avatar:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/476768456_2309655062744352_1664909762725052647_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=DwBfHKw61b0Q7kNvgGs1gI5&_nc_oc=Adn74U4QjFN0gt8Pz4t1FzxrdESBslHIawuR775ebEd2mhDuRr5onRRxYxZBv6tl0wo&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=GX5U4L_xujYsl405IX92TQ&oh=00_AYEhueKvxjExCjgA7emjQcpM9Q9x6_JY1yL5fBULNDl0oA&oe=67E88281",
    },
  },
  {
    src: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/432980182_2069243306785530_7285726960331350315_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lujfY9gQaM4Q7kNvgEtwsz4&_nc_oc=Adka9xWeLSy1PsUwBJAhNXwu_Bdx49UHgGwmrwIaPPv5BleOe8zT3hfy71zn1ZDTKEo&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=vOoABlEnZbHt4CkSs1sb0A&oh=00_AYHVSCBfBRhePtZP5je4X57KpDaRiHVM2accOd3ZlNN67A&oe=67E8A02A",
    user: {
      avatar:
        "https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg",
    },
  },
  {
    src: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/432843863_2069244543452073_9155951562175782046_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wG1wnRuNdggQ7kNvgEYnsrS&_nc_oc=Admm9saP2eHaf_WaiLWGutW3FmRxXCxd1UvZA6DqVjtQpfvABHao1_2TpSnNOS0gILs&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=YIucd9SWnYAKMGozoQ40_w&oh=00_AYE85oAcRP1qaMzIxlWpQ2pVAsgZZEhgJw19Lb8NobTqOg&oe=67E8AC7C",
    user: {
      avatar:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/368216796_1938056006570928_5770352869226967290_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=KNIMa9X4S8UQ7kNvgHqbF4E&_nc_oc=Adl2TiU-e4-SFbbI8bRGv-7apMX0cTaJWQGgQZLxnFRWs4qEEOJnCwrjuxlSJmUgqFA&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=I70jC1qsXIMUyk6hMK3Sjg&oh=00_AYGUkvGl_RedwNoJwCKlXRTy258eSmF99Q5TckHt9580zQ&oe=67E898C3",
    },
  },
  {
    src: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/484805072_2340815376294987_1481253923399699082_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UqhyUvH9RJUQ7kNvgG69hR1&_nc_oc=AdlwgFLnQMs847mgKicKro2my6bk-6fTORaCdKw65oMJj08_5qAG_xwbgzCtFXjDNjI&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=M2EV-3KOpEEJEmnkBGEKBg&oh=00_AYGnJqBOFTKXaEph2feqscS3LEcC7SP9rDdcblQ98g_FyQ&oe=67E8A31A",
    user: {
      avatar:
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/426621131_2046350069074854_6025960451302220098_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=kHVFR9Ft3LgQ7kNvgFGpFRj&_nc_oc=AdlGgOeNQizNFjW-9ZvPAbuZnnBjMEngnatjqfFWdcd1nQVOJmz5lvB4sFzEjXHjmbY&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=a0_LaRdtGUe3BoUvsKcCXQ&oh=00_AYFkbujPVi-K8bo6BR_1Tsg1_vS8fosZhy6d-NdnCN15wg&oe=67E8A13A",
    },
  },
  {
    src: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/479040618_2312620345781157_8721036512697985887_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LrB_1dP5nhcQ7kNvgHzXrj7&_nc_oc=AdkhGrxp85SJxkfw0vlRxc1brPAKWVB6qyHZdKLcBLdIVu7VBong98_-raNNWAN21T8&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=EyiVnlm5Fk8_aDqJQqIoEQ&oh=00_AYEBhJQSHBQR4XOoEWTpqcCi5B3rFQTpdFPsiaKQCT-4_w&oe=67E89182",
    user: {
      avatar:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/476768456_2309655062744352_1664909762725052647_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=DwBfHKw61b0Q7kNvgGs1gI5&_nc_oc=Adn74U4QjFN0gt8Pz4t1FzxrdESBslHIawuR775ebEd2mhDuRr5onRRxYxZBv6tl0wo&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=GX5U4L_xujYsl405IX92TQ&oh=00_AYEhueKvxjExCjgA7emjQcpM9Q9x6_JY1yL5fBULNDl0oA&oe=67E88281",
    },
  },
];

function StoryWrapper() {
  return (
    <div className="flex gap-[10px] overflow-hidden">
      {data.length <= 4 ? (
        <div className="flex gap-[10px]">
          {data.map((item, index) => (
            <StoryItem key={index} data={item} />
          ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          // navigation={true}
          // modules={[Navigation]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <StoryItem data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default StoryWrapper;
