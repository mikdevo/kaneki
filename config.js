window.PROFILE_CONFIG = {
  site: {
    backgroundImage: "./assets/background.png",
    animatedBackground: {
      enabled: true,
      type: "blobs",
      blobs: 5,
      speed: 28
    },
    theme: {
      primary: "#6c5ce7",
      accent: "#00d1ff",
      text: "#f6f7fb",
      muted: "#cfd3e3",
    },
  },
  user: {
    displayName: "Wick",
    avatar: "./assets/avatar.png",
    banner: "./assets/banner.png",
    roles: [
      "Professional Pool Player",
      "Admin",
      "Poetry Enthusiast",
    ],
  },
  roles: {
    "Professional Pool Player": '<i class="fas fa-trophy"></i>',
    Admin: '<i class="fas fa-shield-alt"></i>',
    "Poetry Enthusiast": '<i class="fas fa-feather-alt"></i>',
  },
  dynamic: {
    discord: {
      enabled: true,
      userId: "718080463624732672",
      sourcePriority: ["japi", "lanyard"],
      refreshMs: 10000,
      overrideDisplayName: true,
      imageSizes: { avatar: 512, banner: 2048 },
    },
  },
  socials: [
    { name: "Instagram", url: "https://www.instagram.com/5i365?igsh=MXJoMmg1cHU2NXNxbA==", icon: "fab fa-instagram" },
    { name: "Facebook", url: "https://www.facebook.com/share/1AytQsZvvU/", icon: "fab fa-facebook" },
    { name: "TikTok", url: "https://www.tiktok.com/@ukz9?_t=ZS-8ymnuOr6P4K&_r=1", icon: "fab fa-tiktok" },
  ],
};