function agendar() {
    const selectedDate = new Date(document.getElementById("date").value);
    const agendamentoDate = new Date(selectedDate);
    agendamentoDate.setDate(agendamentoDate.getDate() + 45);

    const agendamentoElement = document.getElementById("agendamento");
    agendamentoElement.innerHTML = `Data agendada para daqui a 45 dias: ${agendamentoDate.toLocaleDateString()}`;
}

window.onload = function() {
    const calendar = document.getElementById("calendar");

    // Implementar um calendário real aqui é uma tarefa mais complexa e está além do escopo deste exemplo.
    // Você pode usar bibliotecas como FullCalendar ou DatePicker para criar um calendário interativo.
};
