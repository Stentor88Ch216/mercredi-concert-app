export default function formatDate(dateString: string): string {
    const date = new Date(dateString.split('/').reverse().join('/'));

    const dayNames = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"];

    const monthNames = [
      "jan", "fév", "mar", "avr", "mai", "jun",
      "jul", "aoû", "sep", "oct", "nov", "déc"
    ];

    const dayIndex = date.getDay();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear().toString().slice(-2);

    return `${dayNames[dayIndex]} ${day} ${monthNames[monthIndex]} ${year}`;
}