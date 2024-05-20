import{s as C,e as p,a as k,c as f,b as B,d as $,f as b,Z as T,h as m,i as D,j as L,n as R,y as S,q as G,ag as M,o as z}from"./scheduler.DAkf0w5B.js";import{e as v}from"./global-flags.C481sXFY.js";import{S as N,i as J}from"./index.VK0yDZc7.js";function U(i,e,a){const s=i.slice();return s[13]=e[a][0],s[14]=e[a][1],s}function y(i){let e,a;return{c(){e=p("source"),this.h()},l(s){e=f(s,"SOURCE",{type:!0,sizes:!0,srcset:!0}),this.h()},h(){m(e,"type","image/"+i[13]),m(e,"sizes",i[0]),M(e,a=i[14].map(E).join(", "))||m(e,"srcset",a)},m(s,h){D(s,e,h)},p(s,h){h&1&&m(e,"sizes",s[0])},d(s){s&&b(e)}}}function A(i){let e,a,s,h,u,l=v(Object.entries(i[8])),n=[];for(let t=0;t<l.length;t+=1)n[t]=y(U(i,l,t));return{c(){e=p("picture");for(let t=0;t<n.length;t+=1)n[t].c();a=k(),s=p("img"),this.h()},l(t){e=f(t,"PICTURE",{class:!0});var c=B(e);for(let r=0;r<n.length;r+=1)n[r].l(c);a=$(c),s=f(c,"IMG",{src:!0,alt:!0,loading:!0,class:!0,draggable:!0}),c.forEach(b),this.h()},h(){T(s.src,h=i[9].src)||m(s,"src",h),m(s,"alt",i[1]),m(s,"loading",i[2]),m(s,"class",u=`${i[3]} transition-all ease-in-out select-none ${i[7]?"opacity-100":"opacity-0"} ${i[5]}`),m(s,"draggable",!1),m(e,"class",i[4])},m(t,c){D(t,e,c);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null);L(e,a),L(e,s),i[12](s)},p(t,[c]){if(c&257){l=v(Object.entries(t[8]));let r;for(r=0;r<l.length;r+=1){const w=U(t,l,r);n[r]?n[r].p(w,c):(n[r]=y(w),n[r].c(),n[r].m(e,a))}for(;r<n.length;r+=1)n[r].d(1);n.length=l.length}c&2&&m(s,"alt",t[1]),c&4&&m(s,"loading",t[2]),c&168&&u!==(u=`${t[3]} transition-all ease-in-out select-none ${t[7]?"opacity-100":"opacity-0"} ${t[5]}`)&&m(s,"class",u),c&16&&m(e,"class",t[4])},i:R,o:R,d(t){t&&b(e),S(n,t),i[12](null)}}}const E=i=>`${i.src} ${i.w}w`;function W(i,e,a){let{meta:s}=e;s instanceof Array||(s=[s]);const h=s[0].sources,u=s[0].img;let{sizes:l="100vw"}=e,{alt:n=""}=e,{loading:t="lazy"}=e,{imageClass:c=""}=e,{pictureClass:r=""}=e,{onLoad:w=()=>null}=e,{transitionDuration:d="duration-300"}=e,_,g=!1;G(()=>{if(_){if(_.complete){a(7,g=!0),w();return}a(6,_.onload=()=>{a(7,g=!0),w()},_)}});function j(o){z[o?"unshift":"push"](()=>{_=o,a(6,_)})}return i.$$set=o=>{"meta"in o&&a(10,s=o.meta),"sizes"in o&&a(0,l=o.sizes),"alt"in o&&a(1,n=o.alt),"loading"in o&&a(2,t=o.loading),"imageClass"in o&&a(3,c=o.imageClass),"pictureClass"in o&&a(4,r=o.pictureClass),"onLoad"in o&&a(11,w=o.onLoad),"transitionDuration"in o&&a(5,d=o.transitionDuration)},[l,n,t,c,r,d,_,g,h,u,s,w,j]}class hr extends N{constructor(e){super(),J(this,e,W,A,C,{meta:10,sizes:0,alt:1,loading:2,imageClass:3,pictureClass:4,onLoad:11,transitionDuration:5})}}const q={avif:""+new URL("../assets/brick_bg.4_e2hA00.avif",import.meta.url).href+" 315w",webp:""+new URL("../assets/brick_bg.CRBBTNn0.webp",import.meta.url).href+" 315w"},H={src:""+new URL("../assets/brick_bg.BFJ_cwLs.jpg",import.meta.url).href,w:315,h:37},K={sources:q,img:H},F={avif:""+new URL("../assets/raie-as-child.DhzMAHaU.avif",import.meta.url).href+" 480w",webp:""+new URL("../assets/raie-as-child.DEW0jkrL.webp",import.meta.url).href+" 480w"},O={src:""+new URL("../assets/raie-as-child.CUjFW9C9.jpg",import.meta.url).href,w:480,h:640},Z={sources:F,img:O},I={avif:""+new URL("../assets/dog_carpet_gms.R4fcYkGn.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/dog_carpet_gms.B39q8S4n.webp",import.meta.url).href+" 500w"},X={src:""+new URL("../assets/dog_carpet_gms.Cpv2RmW2.jpg",import.meta.url).href,w:500,h:375},x={sources:I,img:X},V={avif:""+new URL("../assets/face_shot-1.Blo4m52v.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/face_shot-1.Co5szp7J.webp",import.meta.url).href+" 500w"},Y={src:""+new URL("../assets/face_shot-1.lwWu63h7.jpg",import.meta.url).href,w:500,h:627},P={sources:V,img:Y},Q={avif:""+new URL("../assets/raie-face-shot-2.diM_41HX.avif",import.meta.url).href+" 98w",webp:""+new URL("../assets/raie-face-shot-2.DDZyu7ax.webp",import.meta.url).href+" 98w"},ee={src:""+new URL("../assets/raie-face-shot-2.CM2fNwpH.jpg",import.meta.url).href,w:98,h:98},se={sources:Q,img:ee},te={avif:""+new URL("../assets/crew_and_artists-red_brick_angels-GMS.7iGXNFVd.avif",import.meta.url).href+" 640w",webp:""+new URL("../assets/crew_and_artists-red_brick_angels-GMS.CCp6Iwxt.webp",import.meta.url).href+" 640w"},re={src:""+new URL("../assets/crew_and_artists-red_brick_angels-GMS.BM9Ih4T2.jpg",import.meta.url).href,w:640,h:480},ie={sources:te,img:re},ae={avif:""+new URL("../assets/crew_and_artists-red_brick_angels-GMS-2.CmU9HSqQ.avif",import.meta.url).href+" 640w",webp:""+new URL("../assets/crew_and_artists-red_brick_angels-GMS-2.BKWaqC2o.webp",import.meta.url).href+" 640w"},ne={src:""+new URL("../assets/crew_and_artists-red_brick_angels-GMS-2.CQCiKhYD.jpg",import.meta.url).href,w:640,h:480},oe={sources:ae,img:ne},ce={avif:""+new URL("../assets/jill_cumberbatch-mandolin-no-exif.RgIbgrK5.avif",import.meta.url).href+" 480w",webp:""+new URL("../assets/jill_cumberbatch-mandolin-no-exif.BuLL2R6S.webp",import.meta.url).href+" 480w"},me={src:""+new URL("../assets/jill_cumberbatch-mandolin-no-exif.C78rJWEu.jpg",import.meta.url).href,w:480,h:640},le={sources:ce,img:me},he={avif:""+new URL("../assets/md_and_producer_chillin-GMS.DZioE1Hr.avif",import.meta.url).href+" 640w",webp:""+new URL("../assets/md_and_producer_chillin-GMS.B2ob0_ZT.webp",import.meta.url).href+" 640w"},we={src:""+new URL("../assets/md_and_producer_chillin-GMS.H9RvMiyb.jpg",import.meta.url).href,w:640,h:480},_e={sources:he,img:we},ue={avif:""+new URL("../assets/naz_and_nate_warmin_up.DnBfnTJo.avif",import.meta.url).href+" 640w",webp:""+new URL("../assets/naz_and_nate_warmin_up.niRHJTVg.webp",import.meta.url).href+" 640w"},ge={src:""+new URL("../assets/naz_and_nate_warmin_up.BSXQH88N.jpg",import.meta.url).href,w:640,h:480},pe={sources:ue,img:ge},fe={avif:""+new URL("../assets/raie-concert-opt.DKUnWvvs.avif",import.meta.url).href+" 600w",webp:""+new URL("../assets/raie-concert-opt.P9Ts9Lih.webp",import.meta.url).href+" 600w"},be={src:""+new URL("../assets/raie-concert-opt.B7-utbvu.jpg",import.meta.url).href,w:600,h:392},de={sources:fe,img:be},Le={avif:""+new URL("../assets/blue_bloods-by_steve_yourglivch_and_rachel_bennett.BClwC-tr.avif",import.meta.url).href+" 583w",webp:""+new URL("../assets/blue_bloods-by_steve_yourglivch_and_rachel_bennett.B25oK_jw.webp",import.meta.url).href+" 583w"},Re={src:""+new URL("../assets/blue_bloods-by_steve_yourglivch_and_rachel_bennett.vXoftSjh.jpg",import.meta.url).href,w:583,h:827},ve={sources:Le,img:Re},Ue={avif:""+new URL("../assets/martin_cooke-blues_matters.D07OslyX.avif",import.meta.url).href+" 1058w",webp:""+new URL("../assets/martin_cooke-blues_matters.DuTqVJjb.webp",import.meta.url).href+" 1058w"},ye={src:""+new URL("../assets/martin_cooke-blues_matters.BHHNSZPw.jpg",import.meta.url).href,w:1058,h:945},De={sources:Ue,img:ye},je={avif:""+new URL("../assets/martin_slidel-whats_on_london.DWHJsHj4.avif",import.meta.url).href+" 1407w",webp:""+new URL("../assets/martin_slidel-whats_on_london.CAzc5p8_.webp",import.meta.url).href+" 1407w"},Ce={src:""+new URL("../assets/martin_slidel-whats_on_london.iqQ59m_v.jpg",import.meta.url).href,w:1407,h:710},ke={sources:je,img:Ce},Be={avif:""+new URL("../assets/martin_webb-on_raie.CSD2KwPr.avif",import.meta.url).href+" 868w",webp:""+new URL("../assets/martin_webb-on_raie.ByKppFGw.webp",import.meta.url).href+" 868w"},$e={src:""+new URL("../assets/martin_webb-on_raie.BcqwJfIx.jpg",import.meta.url).href,w:868,h:1999},Te={sources:Be,img:$e},Se={avif:""+new URL("../assets/martin_webb-this_music_thing.BrYiwR2N.avif",import.meta.url).href+" 938w",webp:""+new URL("../assets/martin_webb-this_music_thing.CgS6EbXa.webp",import.meta.url).href+" 938w"},Ge={src:""+new URL("../assets/martin_webb-this_music_thing.DtOHfTKo.jpg",import.meta.url).href,w:938,h:943},Me={sources:Se,img:Ge},ze={avif:""+new URL("../assets/altea-grey.C55CqNwm.avif",import.meta.url).href+" 1200w",webp:""+new URL("../assets/altea-grey.Tqa17mjy.webp",import.meta.url).href+" 1200w"},Ne={src:""+new URL("../assets/altea-grey.nT9I-_6S.jpg",import.meta.url).href,w:1200,h:1600},Je={sources:ze,img:Ne},Ae={avif:""+new URL("../assets/christiano-in_full_flow.DbKhMmAA.avif",import.meta.url).href+" 1536w",webp:""+new URL("../assets/christiano-in_full_flow.BvVcI_uN.webp",import.meta.url).href+" 1536w"},Ee={src:""+new URL("../assets/christiano-in_full_flow.CyN-UceB.jpg",import.meta.url).href,w:1536,h:2048},We={sources:Ae,img:Ee},qe={avif:""+new URL("../assets/farwell_drinks_day_6.DsiXFU-l.avif",import.meta.url).href+" 587w",webp:""+new URL("../assets/farwell_drinks_day_6.CaDJAgwh.webp",import.meta.url).href+" 587w"},He={src:""+new URL("../assets/farwell_drinks_day_6.Dn1k_2WL.jpg",import.meta.url).href,w:587,h:311},Ke={sources:qe,img:He},Fe={avif:""+new URL("../assets/jon_conducts_strings.Jz4gyG-a.avif",import.meta.url).href+" 1200w",webp:""+new URL("../assets/jon_conducts_strings.Cw4KDwha.webp",import.meta.url).href+" 1200w"},Oe={src:""+new URL("../assets/jon_conducts_strings.B7iQr9ly.jpg",import.meta.url).href,w:1200,h:1600},Ze={sources:Fe,img:Oe},Ie={avif:""+new URL("../assets/jon-steinway.DRhg0iHz.avif",import.meta.url).href+" 526w",webp:""+new URL("../assets/jon-steinway.fW_odk6U.webp",import.meta.url).href+" 526w"},Xe={src:""+new URL("../assets/jon-steinway.C9C4sEjv.jpg",import.meta.url).href,w:526,h:480},xe={sources:Ie,img:Xe},Ve={avif:""+new URL("../assets/louis-chords.BUPqAbKG.avif",import.meta.url).href+" 640w",webp:""+new URL("../assets/louis-chords.DCA8F8Q3.webp",import.meta.url).href+" 640w"},Ye={src:""+new URL("../assets/louis-chords.DTi76gYT.jpg",import.meta.url).href,w:640,h:480},Pe={sources:Ve,img:Ye},Qe={avif:""+new URL("../assets/maria-crystal_girl.Bgrqkezn.avif",import.meta.url).href+" 1600w",webp:""+new URL("../assets/maria-crystal_girl.CmmoOT9J.webp",import.meta.url).href+" 1600w"},es={src:""+new URL("../assets/maria-crystal_girl.DhIpYPT8.jpg",import.meta.url).href,w:1600,h:1200},ss={sources:Qe,img:es},ts={avif:""+new URL("../assets/string_section-warm_up.B2WBpV3c.avif",import.meta.url).href+" 548w",webp:""+new URL("../assets/string_section-warm_up.CJnIJi-w.webp",import.meta.url).href+" 548w"},rs={src:""+new URL("../assets/string_section-warm_up.CzKTpIeC.jpg",import.meta.url).href,w:548,h:480},is={sources:ts,img:rs},as={avif:""+new URL("../assets/wes_and_sean-setting_up.CbcbrncA.avif",import.meta.url).href+" 480w",webp:""+new URL("../assets/wes_and_sean-setting_up.CitG6O79.webp",import.meta.url).href+" 480w"},ns={src:""+new URL("../assets/wes_and_sean-setting_up.Bjphdo8-.jpg",import.meta.url).href,w:480,h:360},os={sources:as,img:ns},cs={avif:""+new URL("../assets/wes-mics_up_strings.BdGQTLUi.avif",import.meta.url).href+" 1600w",webp:""+new URL("../assets/wes-mics_up_strings.GxNqsPk4.webp",import.meta.url).href+" 1600w"},ms={src:""+new URL("../assets/wes-mics_up_strings.c4VhtPgX.jpg",import.meta.url).href,w:1600,h:1200},ls={sources:cs,img:ms},hs={avif:""+new URL("../assets/chris_bell.DAE2n1CB.avif",import.meta.url).href+" 480w",webp:""+new URL("../assets/chris_bell.5WxjTd1k.webp",import.meta.url).href+" 480w"},ws={src:""+new URL("../assets/chris_bell.ClHfLNCk.jpg",import.meta.url).href,w:480,h:640},_s={sources:hs,img:ws},us={avif:""+new URL("../assets/christiano-bass.B883MHAB.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/christiano-bass.D5IpnfZ-.webp",import.meta.url).href+" 500w"},gs={src:""+new URL("../assets/christiano-bass.BZEUH4Vz.jpg",import.meta.url).href,w:500,h:375},ps={sources:us,img:gs},fs={avif:""+new URL("../assets/full-band.Bja4TwJT.avif",import.meta.url).href+" 250w",webp:""+new URL("../assets/full-band.CNSQ5zF9.webp",import.meta.url).href+" 250w"},bs={src:""+new URL("../assets/full-band.B0-O8aPL.jpg",import.meta.url).href,w:250,h:138},ds={sources:fs,img:bs},Ls={avif:""+new URL("../assets/jon_dunn-acoustic.BZqdEjFU.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/jon_dunn-acoustic.B4kRLm4q.webp",import.meta.url).href+" 500w"},Rs={src:""+new URL("../assets/jon_dunn-acoustic.epX4yZOp.jpg",import.meta.url).href,w:500,h:375},vs={sources:Ls,img:Rs},Us={avif:""+new URL("../assets/raie-lead_vocal-young_love.BvtcVq6Q.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/raie-lead_vocal-young_love.Bfe673CR.webp",import.meta.url).href+" 500w"},ys={src:""+new URL("../assets/raie-lead_vocal-young_love.B14i32ed.jpg",import.meta.url).href,w:500,h:518},Ds={sources:Us,img:ys},js={avif:""+new URL("../assets/tim_gardner-violin-free_now.Iw6ENlwV.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/tim_gardner-violin-free_now.GWekHuUr.webp",import.meta.url).href+" 500w"},Cs={src:""+new URL("../assets/tim_gardner-violin-free_now.DR1MnwE4.jpg",import.meta.url).href,w:500,h:375},ks={sources:js,img:Cs},Bs={avif:""+new URL("../assets/wesonator.CiZ2ywyJ.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/wesonator.Cpmz8pMw.webp",import.meta.url).href+" 500w"},$s={src:""+new URL("../assets/wesonator.1ew0iF7a.jpg",import.meta.url).href,w:500,h:376},Ts={sources:Bs,img:$s},Ss={avif:""+new URL("../assets/albany_theatre_13_piece_band.Dean5ZdW.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/albany_theatre_13_piece_band.c1T3VmGe.webp",import.meta.url).href+" 500w"},Gs={src:""+new URL("../assets/albany_theatre_13_piece_band.DM9B4upG.jpg",import.meta.url).href,w:500,h:334},Ms={sources:Ss,img:Gs},zs={avif:""+new URL("../assets/album-cover.D8v_7uGN.avif",import.meta.url).href+" 240w",webp:""+new URL("../assets/album-cover.-v2nr2zN.webp",import.meta.url).href+" 240w"},Ns={src:""+new URL("../assets/album-cover.BV6SXtzQ.jpg",import.meta.url).href,w:240,h:240},Js={sources:zs,img:Ns},As={avif:""+new URL("../assets/album_promo_shot-by_sara_samsavari.B2dAXw1n.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/album_promo_shot-by_sara_samsavari.CDiY1HQy.webp",import.meta.url).href+" 500w"},Es={src:""+new URL("../assets/album_promo_shot-by_sara_samsavari.D4f5bHHs.jpg",import.meta.url).href,w:500,h:462},Ws={sources:As,img:Es},qs={avif:""+new URL("../assets/promo-by_sara_samsavari.Cl78VXkL.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/promo-by_sara_samsavari.Chj8qAg9.webp",import.meta.url).href+" 500w"},Hs={src:""+new URL("../assets/promo-by_sara_samsavari.BscJO69Z.jpg",import.meta.url).href,w:500,h:774},Ks={sources:qs,img:Hs},Fs={avif:""+new URL("../assets/glam_pic-by_pete_pinto.CgY4x_Yd.avif",import.meta.url).href+" 426w",webp:""+new URL("../assets/glam_pic-by_pete_pinto.DT2dZRSO.webp",import.meta.url).href+" 426w"},Os={src:""+new URL("../assets/glam_pic-by_pete_pinto.Drlb0xmR.jpg",import.meta.url).href,w:426,h:639},Zs={sources:Fs,img:Os},Is={avif:""+new URL("../assets/album_cover.CFR-bjA1.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/album_cover.D0PPjE_f.webp",import.meta.url).href+" 500w"},Xs={src:""+new URL("../assets/album_cover.Dq0Khsmc.jpg",import.meta.url).href,w:500,h:500},xs={sources:Is,img:Xs},Vs={avif:""+new URL("../assets/band_at_wes_place.DFdiwCrq.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/band_at_wes_place.4rAWa0r8.webp",import.meta.url).href+" 500w"},Ys={src:""+new URL("../assets/band_at_wes_place.CltKLDsW.jpg",import.meta.url).href,w:500,h:500},Ps={sources:Vs,img:Ys},Qs={avif:""+new URL("../assets/band-outside_goldsmiths_studios.DND-Q86r.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/band-outside_goldsmiths_studios.CuOWiSJi.webp",import.meta.url).href+" 500w"},et={src:""+new URL("../assets/band-outside_goldsmiths_studios.jz58z2kP.jpg",import.meta.url).href,w:500,h:361},st={sources:Qs,img:et},tt={avif:""+new URL("../assets/living_room_gig.jnoavT5i.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/living_room_gig.BXd7EzjE.webp",import.meta.url).href+" 500w"},rt={src:""+new URL("../assets/living_room_gig.BSOz5Jnj.jpg",import.meta.url).href,w:500,h:512},it={sources:tt,img:rt},at={avif:""+new URL("../assets/raie-by_bam.CoI51EHu.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/raie-by_bam.BW_UCmTE.webp",import.meta.url).href+" 500w"},nt={src:""+new URL("../assets/raie-by_bam.6TZOIut1.jpg",import.meta.url).href,w:500,h:333},ot={sources:at,img:nt},ct={avif:""+new URL("../assets/raie-by_bim_hjortronsteen.B2Y93117.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/raie-by_bim_hjortronsteen.Ct3iO2Lp.webp",import.meta.url).href+" 500w"},mt={src:""+new URL("../assets/raie-by_bim_hjortronsteen.C5Z_6yKx.jpg",import.meta.url).href,w:500,h:333},lt={sources:ct,img:mt},ht={avif:""+new URL("../assets/studio-dog_and_others.BJNSG8ik.avif",import.meta.url).href+" 500w",webp:""+new URL("../assets/studio-dog_and_others.Bx4W1A87.webp",import.meta.url).href+" 500w"},wt={src:""+new URL("../assets/studio-dog_and_others.CEszObyy.jpg",import.meta.url).href,w:500,h:375},_t={sources:ht,img:wt},ut={avif:""+new URL("../assets/band-hope_and_anchor.BugFWiXS.avif",import.meta.url).href+" 359w",webp:""+new URL("../assets/band-hope_and_anchor.Da5rfS7o.webp",import.meta.url).href+" 359w"},gt={src:""+new URL("../assets/band-hope_and_anchor.M32gRrcY.jpg",import.meta.url).href,w:359,h:479},pt={sources:ut,img:gt},ft={avif:""+new URL("../assets/album-sleeve.hZ87ALNZ.avif",import.meta.url).href+" 1211w",webp:""+new URL("../assets/album-sleeve.COJox3CW.webp",import.meta.url).href+" 1211w"},bt={src:""+new URL("../assets/album-sleeve.CE8hEBSA.jpg",import.meta.url).href,w:1211,h:643},dt={sources:ft,img:bt},Lt={avif:""+new URL("../assets/jon%2520k%2520solo%25202.C9cseS6C.avif",import.meta.url).href+" 976w",webp:""+new URL("../assets/jon%2520k%2520solo%25202.CYRg9pux.webp",import.meta.url).href+" 976w"},Rt={src:""+new URL("../assets/jon%2520k%2520solo%25202.QxZThk0d.jpg",import.meta.url).href,w:976,h:1288},vt={sources:Lt,img:Rt},Ut={avif:""+new URL("../assets/the%2520house%2520sing%2520%25202.Ds-VGhzW.avif",import.meta.url).href+" 1951w",webp:""+new URL("../assets/the%2520house%2520sing%2520%25202.DGZx3e4l.webp",import.meta.url).href+" 1951w"},yt={src:""+new URL("../assets/the%2520house%2520sing%2520%25202.C7xnoGLp.jpg",import.meta.url).href,w:1951,h:1295},Dt={sources:Ut,img:yt},jt={avif:""+new URL("../assets/singing_coach-1.yiojfmLq.avif",import.meta.url).href+" 359w",webp:""+new URL("../assets/singing_coach-1.umer7liy.webp",import.meta.url).href+" 359w"},Ct={src:""+new URL("../assets/singing_coach-1.DyyZKlWi.jpg",import.meta.url).href,w:359,h:693},kt={sources:jt,img:Ct},Bt={avif:""+new URL("../assets/Altea%2520Narici%2520on%2520cello.DT67v7LT.avif",import.meta.url).href+" 1656w",webp:""+new URL("../assets/Altea%2520Narici%2520on%2520cello.DsBbF3sr.webp",import.meta.url).href+" 1656w"},$t={src:""+new URL("../assets/Altea%2520Narici%2520on%2520cello.DcYxGF7F.jpg",import.meta.url).href,w:1656,h:1800},Tt={sources:Bt,img:$t},St={avif:""+new URL("../assets/Backing%2520singers%2520L%2520to%2520R%2520Emily%2520McLean%2520Nathan%2520Devonte%2520and%2520Nazarene.B-7mJmny.avif",import.meta.url).href+" 1800w",webp:""+new URL("../assets/Backing%2520singers%2520L%2520to%2520R%2520Emily%2520McLean%2520Nathan%2520Devonte%2520and%2520Nazarene.DX2MLDPg.webp",import.meta.url).href+" 1800w"},Gt={src:""+new URL("../assets/Backing%2520singers%2520L%2520to%2520R%2520Emily%2520McLean%2520Nathan%2520Devonte%2520and%2520Nazarene.DKtxZ9Fo.jpg",import.meta.url).href,w:1800,h:1201},Mt={sources:St,img:Gt},zt={avif:""+new URL("../assets/Chris%2520Bell%2520on%2520kit.BfNYA06V.avif",import.meta.url).href+" 1800w",webp:""+new URL("../assets/Chris%2520Bell%2520on%2520kit.j37fhjGH.webp",import.meta.url).href+" 1800w"},Nt={src:""+new URL("../assets/Chris%2520Bell%2520on%2520kit.C6Wml_au.jpg",import.meta.url).href,w:1800,h:1514},Jt={sources:zt,img:Nt},At={avif:""+new URL("../assets/Christiano%2520Tortoioli%2520on%2520electric%2520bass.CUMdljou.avif",import.meta.url).href+" 1800w",webp:""+new URL("../assets/Christiano%2520Tortoioli%2520on%2520electric%2520bass.aIuWM5b1.webp",import.meta.url).href+" 1800w"},Et={src:""+new URL("../assets/Christiano%2520Tortoioli%2520on%2520electric%2520bass.B3hWefd4.jpg",import.meta.url).href,w:1800,h:1641},Wt={sources:At,img:Et},qt={avif:""+new URL("../assets/Jon%2520Dunn%2520-%2520album%2520launch%2520Music%2520Director%2520and%2520rhythm%2520guitar%2520.DX4Afk4c.avif",import.meta.url).href+" 1026w",webp:""+new URL("../assets/Jon%2520Dunn%2520-%2520album%2520launch%2520Music%2520Director%2520and%2520rhythm%2520guitar%2520.y5yqdK-g.webp",import.meta.url).href+" 1026w"},Ht={src:""+new URL("../assets/Jon%2520Dunn%2520-%2520album%2520launch%2520Music%2520Director%2520and%2520rhythm%2520guitar%2520.BtlEB-rH.jpg",import.meta.url).href,w:1026,h:1800},Kt={sources:qt,img:Ht},Ft={avif:""+new URL("../assets/Jon%2520Klein%2520_Free%2520Now_%2520solo%2520applause.UU7IA6ok.avif",import.meta.url).href+" 645w",webp:""+new URL("../assets/Jon%2520Klein%2520_Free%2520Now_%2520solo%2520applause.CS1q3J-a.webp",import.meta.url).href+" 645w"},Ot={src:""+new URL("../assets/Jon%2520Klein%2520_Free%2520Now_%2520solo%2520applause.BYxBzGHm.jpg",import.meta.url).href,w:645,h:1800},Zt={sources:Ft,img:Ot},It={avif:""+new URL("../assets/Louis%2520Bell%2520on%2520lead%2520guitar.s1dyYLsy.avif",import.meta.url).href+" 921w",webp:""+new URL("../assets/Louis%2520Bell%2520on%2520lead%2520guitar.D5lXL7fP.webp",import.meta.url).href+" 921w"},Xt={src:""+new URL("../assets/Louis%2520Bell%2520on%2520lead%2520guitar.COM3OqSn.jpg",import.meta.url).href,w:921,h:1340},xt={sources:It,img:Xt},Vt={avif:""+new URL("../assets/Maria%2520Tiimus%2520on%2520violin.ByQPTTMp.avif",import.meta.url).href+" 1525w",webp:""+new URL("../assets/Maria%2520Tiimus%2520on%2520violin.K3XNslOo.webp",import.meta.url).href+" 1525w"},Yt={src:""+new URL("../assets/Maria%2520Tiimus%2520on%2520violin.BKVqRlDz.jpg",import.meta.url).href,w:1525,h:1800},Pt={sources:Vt,img:Yt},Qt={avif:""+new URL("../assets/Standing%2520ovation.TYmVEmZl.avif",import.meta.url).href+" 1800w",webp:""+new URL("../assets/Standing%2520ovation.B0jHqRw-.webp",import.meta.url).href+" 1800w"},er={src:""+new URL("../assets/Standing%2520ovation.DlK0ur8b.jpg",import.meta.url).href,w:1800,h:1201},sr={sources:Qt,img:er},tr={avif:""+new URL("../assets/The%2520final%2520song%2520of%2520the%2520nite.DUzASwAa.avif",import.meta.url).href+" 1800w",webp:""+new URL("../assets/The%2520final%2520song%2520of%2520the%2520nite.CezdAkZO.webp",import.meta.url).href+" 1800w"},rr={src:""+new URL("../assets/The%2520final%2520song%2520of%2520the%2520nite.DhwsrTSe.jpg",import.meta.url).href,w:1800,h:1201},ir={sources:tr,img:rr},ar={avif:""+new URL("../assets/Tim%2520Gardner%2520on%2520keys.Bp3FcbIN.avif",import.meta.url).href+" 1775w",webp:""+new URL("../assets/Tim%2520Gardner%2520on%2520keys.v09UDrSH.webp",import.meta.url).href+" 1775w"},nr={src:""+new URL("../assets/Tim%2520Gardner%2520on%2520keys.GIjnlZFO.jpg",import.meta.url).href,w:1775,h:1800},or={sources:ar,img:nr},wr={red_brick_angels_may_2024:{altea_narici:{src:Tt,naturalDimensions:{width:5028,height:5464},caption:"Altea Narici on cello."},backing_singers:{src:Mt,naturalDimensions:{width:1800,height:1201},caption:"Backing singers, L to R, Emily McLean Nathan Devonte and Nazarene."},chris_bell:{src:Jt,naturalDimensions:{width:5978,height:5028},caption:"Chris Bell on kit."},christiano_tortoioli:{src:Wt,naturalDimensions:{width:5994,height:5464},caption:"Christiano Tortoioli on electric bass."},jon_dunn:{src:Kt,naturalDimensions:{width:3113,height:5464},caption:"Jon Dunn - album launch Music Director and rhythm guitar."},jon_klein:{src:Zt,naturalDimensions:{width:1958,height:5464},caption:"Jon Klein during Free Now."},louis_bell:{src:xt,naturalDimensions:{width:921,height:1340},caption:"Louis Bell on lead guitar."},maria_tiimus:{src:Pt,naturalDimensions:{width:4240,height:5006},caption:"Maria Tiimus on violin."},standing_ovation:{src:sr,naturalDimensions:{width:2160,height:1441},caption:"A standing ovation for our final song at the Camden Club."},final_song:{src:ir,naturalDimensions:{width:2160,height:1441},caption:"The final song of the nite at The Camden Club."},tim_gardner:{src:or,naturalDimensions:{width:5387,height:5464},caption:"Tim Gardner on keys."}},brick_bg:{src:K,naturalDimensions:{width:315,height:37}},raie_as_child:{src:Z,naturalDimensions:{width:480,height:640},caption:"Raie as a young performer – singing Joan Baez’ Ghetto"},raie_concert:{src:de,naturalDimensions:{width:600,height:392}},dog_carpet:{src:x,naturalDimensions:{width:640,height:480},caption:"Isra – the band mascot"},crew_and_artists_red_brick_angels_GMS:{src:ie,naturalDimensions:{width:640,height:480}},crew_and_artists_red_brick_angels_GMS_2:{src:oe,naturalDimensions:{width:640,height:480}},jill_cumberbatch_mandolin:{src:le,naturalDimensions:{width:480,height:640},caption:"Jill Cumberbatch gets ready to play mandolin on Crystal Girl at GMS"},md_and_producer_chillin_GMS:{src:_e,naturalDimensions:{width:640,height:480}},naz_and_nate_warmin_up:{src:pe,naturalDimensions:{width:640,height:480},caption:"Day one of backing vocals on Red Brick Angel at GMS"},altea_grey:{src:Je,naturalDimensions:{width:1200,height:1600},caption:"Altea plays on Grey"},christiano_in_full_flow:{src:We,naturalDimensions:{width:1536,height:2048},caption:"Christiano self portait in full flow"},farwell_drinks_day_6:{src:Ke,naturalDimensions:{width:587,height:311},caption:"Farewell drink at the bar – day 6!"},jon_conducts_strings:{src:Ze,naturalDimensions:{width:1200,height:1600},caption:"Jon conducts the string section"},jon_steinway:{src:xe,naturalDimensions:{width:526,height:480},caption:"Jon at the Steinway"},louis_chords:{src:Pe,naturalDimensions:{width:640,height:480},caption:"Louis checks out his chords"},maria_crystal_girl:{src:ss,naturalDimensions:{width:1600,height:1200},caption:"Maria plays her solo on Crystal Girl"},string_section_warm_up:{src:is,naturalDimensions:{width:548,height:480},caption:"The string section warm up"},wes_and_sean_setting_up:{src:os,naturalDimensions:{width:480,height:640}},wes_mics_up_strings:{src:ls,naturalDimensions:{width:1600,height:1200},caption:"Wes mics up the strings"},faceshots:{1:{src:P,naturalDimensions:{width:1037,height:1300}},2:{src:se,naturalDimensions:{width:98,height:98}}},reviews:{review_blue_bloods_by_steve_yourglivch_and_rachel_bennett:{src:ve,naturalDimensions:{width:583,height:827}},review_martin_cooke_blues_matters:{src:De,naturalDimensions:{width:1058,height:945}},review_martin_slidel_whats_on_london:{src:ke,naturalDimensions:{width:1407,height:710}},review_martin_webb_on_raie:{src:Te,naturalDimensions:{width:868,height:1999}},review_martin_webb_this_music_thing:{src:Me,naturalDimensions:{width:938,height:943}}},singing_coach:{1:{src:kt,naturalDimensions:{width:359,height:693}}},galaxy:{chris:{src:_s,naturalDimensions:{width:480,height:640},caption:"Chris Bell listening intently!"},"christiano-bass":{src:ps,naturalDimensions:{width:2048,height:1536},caption:"Christiano on bass"},"full-band":{src:ds,naturalDimensions:{width:661,height:371},caption:"The band ends six beautiful days at Galaxy"},"jon_dunn-acoustic":{src:vs,naturalDimensions:{width:640,height:480}},"raie-lead_vocal-young_love":{src:Ds,naturalDimensions:{width:1538,height:1594},caption:"Raie at the mic in Galaxy Studios"},"tim_gardner-violin-free_now":{src:ks,naturalDimensions:{width:1600,height:1200},caption:"Tim gets focused!"},wesonator:{src:Ts,naturalDimensions:{width:640,height:481},caption:"Wes at the desk"}},albums:{earthbound:{albany_theatre_13_piece_band:{src:Ms,naturalDimensions:{width:5121,height:3419}},album_cover:{src:Js,naturalDimensions:{width:240,height:240}},"glam_pic-by_pete_pinto":{src:Zs,naturalDimensions:{width:426,height:639}},"album_promo_shot-by_sara_samsavari":{src:Ws,naturalDimensions:{width:1064,height:984}},"promo-by_sara_samsavari":{src:Ks,naturalDimensions:{width:2432,height:3763}}},this_music_thing:{album_cover:{src:xs,naturalDimensions:{width:700,height:700}},band_at_wes_place:{src:Ps,naturalDimensions:{width:1024,height:1024}},band_outside_goldsmiths_studios:{src:st,naturalDimensions:{width:2487,height:1796}},living_room_gig:{src:it,naturalDimensions:{width:853,height:873}},raie_by_bam:{src:ot,naturalDimensions:{width:1500,height:998}},raie_by_bim:{src:lt,naturalDimensions:{width:1500,height:998}},studio_dog_and_others:{src:_t,naturalDimensions:{width:4032,height:3024}}},red_brick_angels:{band_hope_and_anchor:{src:pt,naturalDimensions:{width:1200,height:1600}},album_sleeve:{src:dt,naturalDimensions:{width:1211,height:643}},jon_k_solo_2:{src:vt,naturalDimensions:{width:976,height:1288}},the_house_sing_2:{src:Dt,naturalDimensions:{width:1951,height:1295}}}}};export{hr as E,wr as i};