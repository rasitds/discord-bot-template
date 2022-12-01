module.exports = {
  data: { name: "ping", description: "Pongs." },
  async execute(interaction) {
    await interaction.reply({
      content: "pong",
      ephemeral: true, // Geçici mesaj. Mesajı sadece komutu çalıştıran kullanıcıya gösterir
    });
  },
};
