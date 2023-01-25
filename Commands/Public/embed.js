const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Returns an embed.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  /**
   * @param {CommandInteraction} interaction
   */

  execute(interaction, client) {
    //   interaction.reply({ content: "Pong", ephemeral: true });
    const embed = new EmbedBuilder()
      .setTitle("This is the Embed!")
      .setDescription("This is the very cool description!")
      .setColor(0x18e1ee)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .addFields([
        {
          name: `Field 1`,
          value: `Field value 1`,
          inlline: true,
        },
        {
          name: `Field 2`,
          value: `Field value 2`,
          inlline: true,
        },
      ]);

    interaction.reply({ embeds: [embed] });
  },
};
