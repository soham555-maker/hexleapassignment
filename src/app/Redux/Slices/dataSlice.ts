import { createSlice } from "@reduxjs/toolkit";
import { DataState, initialStateType } from "../../../../Types/store.types";

const initialState: initialStateType = {
  data: [
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gRi10t64DHbb7CKAQ32uZ8r5GgEveA16AhaoyJEq5xxP-SI1b7CiBLkszXQXdS713LL7XKUWF8lKLmJUBIHFgNwgoxU7Q9nUnTlunB5FYP~lcjUv94Cz3te24QyiQnWAXIYz8fW7GX3EBT4Fm9fCAf3N4UG9T9VBZmPdj48aJydkpc4ghL1a~Vxl2ffVb60sIf7aGozJWUMLb19ldALA1PIcnDhX4fLianO0lSzhCaZqBocge45saoIJsWh-Namu5euhcgWNzj4jjaLFrh40McHoPYSz2FJkcgSqcfGTQhpa9-5YidZ0H6j-Uo2C~uB2DgFW5uPwJWNq~9Ow~j12qQ__",
      title: "Sacramento River Cats",
      total_events: 48,
      category: "Baseball",
      id: 0,
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__",
      title: "Las Vegas Aviators",
      total_events: 28,
      category: "Baseball",
      id: 1,
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/b290/2f7a/b2fcf21c696811f745109da24a740d73?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtF-TuNcma0-HNbqtENI51868JjNd38EzT5jARpBJ7hvmYBWokB-dZmajh5EMHlo2vJzQl9gymCpvrM7j-OLsXKViFlh7n7qb~M8onQwwDoSvBvPrbH~d1~5N3rn6XxrGb742E~ZWxs83gLMTv8QsQ202LGEzCght4GGoLiPW7Y3aC4ADsJjQGWCoFD-TiRG8PQxSAnlgncjQAWThvQLxl695HYHxq4VShwiSl5CBfH-20XVdVi0W6gEt71vHHuQTSgOcG5eir2lvYRIvY3qLXixYYJZvT72XXJklWzu19p515wWV0QI5LTKLnfRvpPI1s9D5dRrk4tAFZGTC2J3fw__",
      title: "New Jersey Devils",
      total_events: 15,
      category: "Ice Hockey",
      id: 2,
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__",
      title: "Las Vegas Aviators",
      total_events: 28,
      category: "Baseball",
      id: 3,
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__",
      title: "Las Vegas Aviators",
      total_events: 28,
      category: "Baseball",
      id: 4,
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/b290/2f7a/b2fcf21c696811f745109da24a740d73?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtF-TuNcma0-HNbqtENI51868JjNd38EzT5jARpBJ7hvmYBWokB-dZmajh5EMHlo2vJzQl9gymCpvrM7j-OLsXKViFlh7n7qb~M8onQwwDoSvBvPrbH~d1~5N3rn6XxrGb742E~ZWxs83gLMTv8QsQ202LGEzCght4GGoLiPW7Y3aC4ADsJjQGWCoFD-TiRG8PQxSAnlgncjQAWThvQLxl695HYHxq4VShwiSl5CBfH-20XVdVi0W6gEt71vHHuQTSgOcG5eir2lvYRIvY3qLXixYYJZvT72XXJklWzu19p515wWV0QI5LTKLnfRvpPI1s9D5dRrk4tAFZGTC2J3fw__",
      title: "New Jersey Devils",
      total_events: 15,
      category: "Ice Hockey",
      id: 5,
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__",
      title: "Las Vegas Aviators",
      total_events: 28,
      category: "Baseball",
      id: 6,
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gRi10t64DHbb7CKAQ32uZ8r5GgEveA16AhaoyJEq5xxP-SI1b7CiBLkszXQXdS713LL7XKUWF8lKLmJUBIHFgNwgoxU7Q9nUnTlunB5FYP~lcjUv94Cz3te24QyiQnWAXIYz8fW7GX3EBT4Fm9fCAf3N4UG9T9VBZmPdj48aJydkpc4ghL1a~Vxl2ffVb60sIf7aGozJWUMLb19ldALA1PIcnDhX4fLianO0lSzhCaZqBocge45saoIJsWh-Namu5euhcgWNzj4jjaLFrh40McHoPYSz2FJkcgSqcfGTQhpa9-5YidZ0H6j-Uo2C~uB2DgFW5uPwJWNq~9Ow~j12qQ__",
      title: "Sacramento River Cats",
      total_events: 48,
      category: "Baseball",
      id: 7,
    },
  ],
  spotLight: [
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZDcos--1UzSQRlT-N9cx65GfMLCdY1bDgUpPVGWaSaeNFqn5f3mWqPPavOC3dwIVAQ5LSFSV87f4nqFWTL47SpM9SAoK-Hik~QDb9r9ZcMQi0f2bLc~CwVSIVqTWUUErwccA~nln3KASNGTwveym6PUgIPSqPuS0TzUtzpGFgI80gg31qkC0KXNRC--XF6vFtVP5szniy~A5-hhak8Ct-WgvgQLqVThJm~LXpDkB0NIVZ8NQ9O2y6whQDm0gf7Ex7i03oFtipY19gbTtPAr6mzV-0RZKivl-0woyvGsK-aA1JzKvWYgzExzhjqGFCca1yvb2KbomyjjpZHxtvZV-A__",
      title: "Las Vegas Aviators",
      total_events: 28,
      category: "Baseball",
      id: 0,
      Date: "OCT 15",
      Day: "SUN",
      Time: "8:00 PM",
      Venue: "Las Vegas Ballpark, Las Vegas, Nveda",
      Collection_Name: "Take Flight Collection",
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nUF~1EVyrZGHV5Y2m287PwrLOJlkr894fLVacxtljXvPD4wxG9g4D2HNAj17sY960ZApdFZ7vZXHvZjq0~7Vb0wM3nF3b6Vi4SHLk4ztO3tAouszbmpZp~d~lEZl3-95hpbTXgrwtNGB8ujsBxQL5KUsZwG3wCPXLt61kJIpz2pmCQcmY9vS-JuNgfHT13F0ObY4jJSYeFrRcihRJfTmLxzOCbyXqncFRQhnBCuL50D-E1XAHNLFOX5AXJVnBoisGHVAYJbjfoz3UWH0g-bApbnLTUyR5vEZUBdIwoQISiaSttjGTQD6NhpHyKXKHWuE3yVUN2jmWzVwOnvPzn1nEA__",
      title: "Sacramento River Cats",
      total_events: 48,
      category: "Baseball",
      id: 1,
      Date: "OCT 15",
      Day: "SUN",
      Time: "4:00 PM",
      Venue: "Sutter Health Park, Sacramento, California",
      Collection_Name: "Orange Collection",
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZDcos--1UzSQRlT-N9cx65GfMLCdY1bDgUpPVGWaSaeNFqn5f3mWqPPavOC3dwIVAQ5LSFSV87f4nqFWTL47SpM9SAoK-Hik~QDb9r9ZcMQi0f2bLc~CwVSIVqTWUUErwccA~nln3KASNGTwveym6PUgIPSqPuS0TzUtzpGFgI80gg31qkC0KXNRC--XF6vFtVP5szniy~A5-hhak8Ct-WgvgQLqVThJm~LXpDkB0NIVZ8NQ9O2y6whQDm0gf7Ex7i03oFtipY19gbTtPAr6mzV-0RZKivl-0woyvGsK-aA1JzKvWYgzExzhjqGFCca1yvb2KbomyjjpZHxtvZV-A__",
      title: "Las Vegas Aviators",
      total_events: 28,
      category: "Baseball",
      id: 2,
      Date: "OCT 15",
      Day: "SUN",
      Time: "8:00 PM",
      Venue: "Las Vegas Ballpark, Las Vegas, Nveda",
      Collection_Name: "Take Flight Collection",
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nUF~1EVyrZGHV5Y2m287PwrLOJlkr894fLVacxtljXvPD4wxG9g4D2HNAj17sY960ZApdFZ7vZXHvZjq0~7Vb0wM3nF3b6Vi4SHLk4ztO3tAouszbmpZp~d~lEZl3-95hpbTXgrwtNGB8ujsBxQL5KUsZwG3wCPXLt61kJIpz2pmCQcmY9vS-JuNgfHT13F0ObY4jJSYeFrRcihRJfTmLxzOCbyXqncFRQhnBCuL50D-E1XAHNLFOX5AXJVnBoisGHVAYJbjfoz3UWH0g-bApbnLTUyR5vEZUBdIwoQISiaSttjGTQD6NhpHyKXKHWuE3yVUN2jmWzVwOnvPzn1nEA__",
      title: "Sacramento River Cats",
      total_events: 48,
      category: "Baseball",
      id: 3,
      Date: "OCT 15",
      Day: "SUN",
      Time: "4:00 PM",
      Venue: "Sutter Health Park, Sacramento, California",
      Collection_Name: "Orange Collection",
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZDcos--1UzSQRlT-N9cx65GfMLCdY1bDgUpPVGWaSaeNFqn5f3mWqPPavOC3dwIVAQ5LSFSV87f4nqFWTL47SpM9SAoK-Hik~QDb9r9ZcMQi0f2bLc~CwVSIVqTWUUErwccA~nln3KASNGTwveym6PUgIPSqPuS0TzUtzpGFgI80gg31qkC0KXNRC--XF6vFtVP5szniy~A5-hhak8Ct-WgvgQLqVThJm~LXpDkB0NIVZ8NQ9O2y6whQDm0gf7Ex7i03oFtipY19gbTtPAr6mzV-0RZKivl-0woyvGsK-aA1JzKvWYgzExzhjqGFCca1yvb2KbomyjjpZHxtvZV-A__",
      title: "Las Vegas Aviators",
      total_events: 28,
      category: "Baseball",
      id: 4,
      Date: "OCT 15",
      Day: "SUN",
      Time: "8:00 PM",
      Venue: "Las Vegas Ballpark, Las Vegas, Nveda",
      Collection_Name: "Take Flight Collection",
    },
    {
      poster_path:
        "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZDcos--1UzSQRlT-N9cx65GfMLCdY1bDgUpPVGWaSaeNFqn5f3mWqPPavOC3dwIVAQ5LSFSV87f4nqFWTL47SpM9SAoK-Hik~QDb9r9ZcMQi0f2bLc~CwVSIVqTWUUErwccA~nln3KASNGTwveym6PUgIPSqPuS0TzUtzpGFgI80gg31qkC0KXNRC--XF6vFtVP5szniy~A5-hhak8Ct-WgvgQLqVThJm~LXpDkB0NIVZ8NQ9O2y6whQDm0gf7Ex7i03oFtipY19gbTtPAr6mzV-0RZKivl-0woyvGsK-aA1JzKvWYgzExzhjqGFCca1yvb2KbomyjjpZHxtvZV-A__",
      title: "Las Vegas Aviators",
      total_events: 28,
      category: "Baseball",
      id: 5,
      Date: "OCT 15",
      Day: "SUN",
      Time: "8:00 PM",
      Venue: "Las Vegas Ballpark, Las Vegas, Nveda",
      Collection_Name: "Take Flight Collection",
    },
  ],
  adds: [
    {
      id: 0,
      title: "Dick's Sporting Goods",
      description:
        "Get 20% off on all sports equipment lorem50,ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster_path:
        "https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ME0JQVe21xR~EAZyQR30C2LsuJ9ZbHratF26Okpyzn6CDQ49MaxPfOMkUuQzMlc7wQSknwCfpHpz3MIf3JIe5KIyiyXqFoaye6lhdaJHbDBgNUPlHetDFDUVxZdvxvknVBjIqY9sjq77hsEy-6swkT2ewezmlCjWL2~nFHS-k7W18G-nm7U3hHc6s3q0jSQVeyl7CwNmOYdCMT0VNtQ3Z3WyLB2XKttniutJ2l-uyDkJNK6NCC5nYn001RxfZBQj0V5~FSPipdzNNQFRhCv5qBaLEEh6fHymXmgmZKpoO~1Lm-7OsgU8uvEdE6iuqKE2aszdCGNX230k-JRO1KZ2NQ__",
      horizontal_image:
        "https://media.licdn.com/dms/image/C4E16AQEUUf_J-665Gw/profile-displaybackgroundimage-shrink_200_800/0/1621600650490?e=2147483647&v=beta&t=gRgBJbElJ9oBkncregwN07WKVusBc7CkJcFdNxr0Gjg",
    },
    {
      id: 1,
      title: "Zomato Burger Friday",
      description:
        "Get 50% off on all burgers lorem50,ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster_path:
        "https://img.freepik.com/free-psd/food-social-media-banner-post-template_202595-365.jpg",
      horizontal_image:
        "https://www.shutterstock.com/image-vector/fried-chicken-burger-banner-ads-260nw-1519010069.jpg",
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action: { payload: DataState[] }) {
      state.data = action.payload;
    },
    pushData(state, action: { payload: any }) {
      state.data.push(action.payload);
    },
  },
});

export const { setData, pushData } = dataSlice.actions;
export default dataSlice.reducer;
