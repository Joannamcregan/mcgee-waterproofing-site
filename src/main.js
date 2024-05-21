const main = document.querySelector('main');
const header = document.querySelector('header');

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
    setTimeout(()=>  main.classList.add('bg-[#97cde6]'), 14000);
    setTimeout(()=>  main.classList.remove('bg-gray-500'), 14000);
    setTimeout(()=>  main.classList.remove('animate-lightenWall'), 14000);
    //Paint Ceiling
    setTimeout(()=>  header.classList.add('animate-lightenCeiling'), 14000);
    setTimeout(()=>  header.classList.add('bg-[#ede7df]'), 21000);
    setTimeout(()=>  header.classList.add('text-[#302920]'), 21000);
    setTimeout(()=>  header.classList.remove('bg-[#635b50]'), 21000);
    setTimeout(()=>  header.classList.remove('text-[#ebe6e1]'), 21000);
    setTimeout(()=>  header.classList.add('animate-addCeilingLight'), 21000);
    setTimeout(()=>  header.classList.add('shadow-yellow-50'), 23000);
    setTimeout(()=>  header.classList.remove('shadow-zinc-900'), 23000);
}