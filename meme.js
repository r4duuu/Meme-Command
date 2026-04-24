const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const GIPHY_API_KEY = process.env.GIPHY_KEY;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Search a random Meme in Giphy'),

  async execute(interaction) {
    await interaction.deferReply();

    if (!GIPHY_API_KEY) {
      return interaction.editReply('GIPHY_KEY is not defined in .env!');
    }

    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=meme&limit=50&rating=pg-13`
      );

      const data = await res.json();

      if (!data.data.length) {
        return interaction.editReply('I couldnt find find any memes!');
      }

      const random = data.data[Math.floor(Math.random() * data.data.length)];

      const url = random.images.original.url;
      const title = random.title || 'Meme';

      const embed = new EmbedBuilder()
        .setTitle("Random Meme")
        .setImage(url)
        .setColor('Random')
        .setFooter({ text: 'r4duu Developments' })
        .setTimestamp();

      await interaction.editReply({ embeds: [embed] });

    } catch (err) {
      console.error(err);
      await interaction.editReply('Fetch error.');
    }
  }
};
