const main = document.querySelector('main');
const header = document.querySelector('header');
const rethink = document.getElementById('rethink');
const contact = document.getElementById('contact');
const ohio = document.getElementById('ohio');

document.addEventListener('DOMContentLoaded', glowUp());

function glowUp(){
    //Dry out wall
    setTimeout(()=>  main.classList.add('animate-dry'), 2000);
    setTimeout(()=>  main.classList.add('bg-gray-500'), 7000);
    setTimeout(()=>  main.classList.remove('bg-gradient-to-b'), 7000);
    setTimeout(()=>  main.classList.remove('from-zinc-500'), 7000);
    setTimeout(()=>  main.classList.remove('from-55%'), 7000);
    setTimeout(()=>  main.classList.remove('to-neutral-600'), 7000);
    setTimeout(()=>  main.classList.remove('to-60%'), 7000);
    setTimeout(()=>  main.classList.remove('bg-fixed'), 7000);
    setTimeout(()=>  main.classList.remove('animate-dry'), 7000);
    //Paint wall
    setTimeout(()=>  main.classList.add('animate-lightenWall'), 7000);
    setTimeout(()=>  main.classList.add('bg-[#bfdce0]'), 14000);
    setTimeout(()=>  main.classList.remove('bg-gray-500'), 14000);
    setTimeout(()=>  main.classList.remove('animate-lightenWall'), 14000);
    //Paint Ceiling
    setTimeout(()=>  header.classList.add('animate-lightenCeiling'), 10000);
    setTimeout(()=>  header.classList.add('bg-[#ede7df]'), 15000);
    setTimeout(()=>  header.classList.add('text-[#302920]'), 15000);
    setTimeout(()=>  header.classList.remove('bg-[#635b50]'), 15000);
    setTimeout(()=>  header.classList.remove('text-[#ebe6e1]'), 15000);
    setTimeout(()=>  header.classList.add('animate-addCeilingLight'), 15000);
    setTimeout(()=>  header.classList.add('border-yellow-100'), 17000);
    setTimeout(()=>  header.classList.add('border-b-4'), 17000);
    setTimeout(()=>  header.classList.add('shadow-yellow-50'), 17000);
    setTimeout(()=>  header.classList.remove('shadow-zinc-900'), 17000);
    //paint sections
    setTimeout(()=>  rethink.classList.remove('bg-zinc-100'), 18000);
    setTimeout(()=>  rethink.classList.add('bg-[#eaebe6]'), 18000);
    setTimeout(()=>  rethink.classList.remove('border-zinc-200'), 18000);
    setTimeout(()=>  rethink.classList.add('border-[#d8d9d4]'), 18000);
    setTimeout(()=>  contact.classList.remove('bg-zinc-100'), 19000);
    setTimeout(()=>  contact.classList.add('bg-[#e8e5e3]'), 19000);
    setTimeout(()=>  contact.classList.remove('border-zinc-200'), 19000);
    setTimeout(()=>  contact.classList.add('border-[#d9d6d4]'), 19000);
    setTimeout(()=>  ohio.classList.remove('bg-zinc-100'), 20000);
    setTimeout(()=>  ohio.classList.add('bg-[#dfe3e6]'), 20000);
    setTimeout(()=>  ohio.classList.remove('border-zinc-200'), 20000);
    setTimeout(()=>  ohio.classList.add('border-[#d0d3d6]'), 20000);
}