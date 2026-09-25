# OFICIN-IA CHECKLIST V15.23.1

Correção consolidada baseada nos ZIPs CHECKLIS_SOS e SAAS-2 enviados em 25/09/2026.

- Corrigido o erro real `Cannot read properties of null (reading 'forEach')`: cinco seletores de listas usavam `$` (getElementById) no lugar de `$$` (querySelectorAll).
- Corrigidos os botões PDF equipe e PDF técnico em checklists salvos.
- PDF equipe compactado para ações e observações; PDF técnico resume OK/N/A por seção e detalha exceções/fotos.
- Login alinhado ao SAAS-2 e reaproveitamento da sessão `j_*`.
- Modelo isolado em `checklistModelos/checklis_sos_v15`; não grava no `default` legado.
- Rascunho/modelo local isolados por oficina/usuário.
- Tempo real e observações por voz preservados.
- Cache/PWA renovado para 15.23.1.

## V15.23.2 — entrega real dos PDFs

- PDF equipe e PDF técnico passam a gerar Blob e entregar o arquivo de forma explícita.
- Web/PC: abre uma visualização do PDF e também dispara o download.
- Android/Capacitor: usa Filesystem + Share para abrir o compartilhamento/salvamento nativo.
- Corrige o caso em que a interface mostrava “PDF gerado” sem o arquivo aparecer.
- Nenhuma regra do checklist, login, tempo real, modelo ou observação por voz foi removida.
