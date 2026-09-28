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

## V15.23.3 — relatório orientado à decisão

- O PDF técnico deixa de jogar todas as ocorrências em uma lista única.
- Ordem operacional: 1) COMPRAR/COTAR, 2) EXECUTAR NA OFICINA, 3) REVISAR/DIAGNOSTICAR, 4) OBSERVAÇÕES QUE IMPACTAM O ORÇAMENTO, 5) AUDITORIA COMPACTA.
- O PDF de equipe segue a mesma lógica e agrupa peças por item/posição usando a lógica já existente de cotação.
- Itens OK/N/A continuam preservados no registro e aparecem apenas como conferência/resumo, sem poluir a lista operacional.
- Observações do técnico são destacadas para evitar compra errada quando especificam lado, peça ou condição diferente do nome geral do item.
- Nenhuma lógica de login, Firebase, tempo real, microfone, fotos, O.S., histórico ou edição foi removida.
