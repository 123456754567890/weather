const { Client, EmbedBuilder, PermissionsBitField , ActionRowBuilder  , ButtonStyle} = require("discord.js");
const Discord = require("discord.js")

// Metehan Studio Tarafından Yapılmıştır - discord.gg/medya

module.exports = {
  name: "havadurumu",
  description: "yazdığın şehirin hava durumu bilgisini gösterir.",
  type: 1,
  options: [


    {
        name:"il",
        description:"şehir ismini yaz",
        type:3,
        required:true
    },

  ],

  run: async(client, interaction) => {

        const mete = interaction.options.getString('il')
        const mete2 = await fetch(`https://api.metehanstudio.xyz/api/hava-durumu?konum=${mete}&api_key=metehanfreekey`);
        const mete3 = await mete2.json();
        const Metehan1 = mete3.konum;
        const Metehan2 = mete3.enlem;
        const Metehan3 = mete3.uzunluk;
        const Metehan4 = mete3.dereceturu;
        const Metehan5 = mete3.sicaklik;
        const Metehan6 = mete3.havadurumu;
        const metus = new EmbedBuilder()
            .setDescription(`> Araştırdığınız Şehir: ${Metehan1  || "veri alınamadı" } \n\n> Hava Durumu: ${Metehan6  || "veri alınamadı" } \n\n> Enlem: ${Metehan2  || "veri alınamadı" } \n\n>  Uzunluk: ${Metehan3  || "veri alınamadı" } \n\n>  Derece Türü: ${Metehan4  || "veri alınamadı" } \n\n>  Sıcaklık: ${Metehan5  || "veri alınamadı" }  `)
            .setColor("ff7063")
            .setTimestamp()
            .setImage("https://media.discordapp.net/attachments/1069737352022478888/1093258519802822676/msteam-1.png?width=875&height=187")
            .setFooter({
                text: "MetuS",
                iconURL:
                  "https://media.discordapp.net/attachments/1069737352022478888/1148679106817441874/metus.png?ex=651a5c88&is=65190b08&hm=3b15d6f6f91cac16b002ebe673865eaf5fc45cd8bf64e363e4ae194e1278de70&=&width=670&height=670",
              })

            await interaction.deferReply();

            interaction.followUp({ embeds: [metus] })}}
            
// Metehan Studio Tarafından Yapılmıştır - discord.gg/medya