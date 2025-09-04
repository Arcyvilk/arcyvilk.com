export type RedditPost = {
  id: string
  image: string | null
  title: string
  body: string
  upvotes: number
  downvotes:number
  author: string
  subreddit: string
  date: Date
}

export const redditPosts:RedditPost[] = [
  {
    id:"2131",
    image: null,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: "Nunc finibus hendrerit dolor ut hendrerit. Nulla facilisi. Curabitur pretium dolor eu ligula interdum dignissim. Morbi vel bibendum augue. Proin quis hendrerit arcu, quis sagittis lacus. Maecenas ac turpis placerat, euismod lectus vel, semper dolor. Maecenas et elit dignissim, ornare nibh sit amet, mattis orci. Aliquam non nisi nibh. Nam mattis, justo nec rhoncus iaculis, felis sapien consequat dolor, non dictum velit nisi et erat. Integer ac erat est. Duis fermentum placerat odio id malesuada. In hac habitasse platea dictumst. Donec enim elit, feugiat et libero sed, scelerisque tincidunt sem. Donec id finibus sapien, a tempor felis. Fusce at rhoncus ex, nec mollis magna. Phasellus neque mauris, accumsan id purus eu, condimentum vulputate eros.",
    upvotes: 1322,
    downvotes:483,
    author: "lipsum",
    subreddit:"all",
    date: new Date('2023-10-01T12:00:00Z')
  },
  {
    id:"2132",
    image: null,
    title: "Is my cat dying?",
    body: "help my cat is acting really weird. he sits on my bed and whenever i touch him je just starts vibrating??? like his entire body vibrates and its really scary. he also keeps looking at me and meowing at me. i dont have money for vet but im really worried. has anyone else experienced this with their cat? is he dying???",
    upvotes: 43243,
    downvotes: 3299,
    author: "crassus1999",
    subreddit: "CATHELP",
    date: new Date('2023-10-02T14:03:10Z')
  },
  {
    id:"2137",
    image: null,
    title: "Why are people in Poland joking about the number 2137?",
    body: "Recently, I've noticed a lot of memes and jokes circulating in Poland that reference the number 2137. It seems to be popping up in various contexts, from social media posts to casual conversations. I'm curious about the origin of this trend and what significance the number holds in Polish culture or internet humor. Can anyone shed some light on why 2137 has become such a popular reference?",
    upvotes: 3000,
    downvotes:863,
    author: "5b2137692022",
    subreddit:"poland",
    date: new Date('2023-10-01T12:00:00Z')
  },

]