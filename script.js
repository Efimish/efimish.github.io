const discord = document.getElementById('discord');
const discordTooltip = discord.querySelector('p');
discord.onclick = () => {
    navigator.clipboard.writeText('efima');
    const text = discordTooltip.textContent;
    discordTooltip.textContent = 'Copied!';
    setTimeout(() => {
        discordTooltip.textContent = text;
    }, 1000);
}