import { axios } from "@pipedream/platform"
export default defineComponent({
  props: {
    discord_bot: {
      type: "app",
      app: "discord_bot",
    }
  },
  async run({steps, $}) {
    return await axios($, {
      method: 'POST',
      url: `https://discord.com/api/channels/1115580002285654046/messages`,
      headers: {
        "Authorization": `Bot ${this.discord_bot.$auth.bot_token}`,
      },
      data: {
        embeds: [ steps.generate_embed.$return_value.embed ]
      }
    })
  },
})