# OFICIN-IA Checklist V15.21

## Objetivo
Tornar o preenchimento mais prático sem remover o checklist técnico detalhado já existente.

## Alterações principais

- **Salvar a qualquer momento**: botão fixo `💾 Salvar agora` disponível durante o preenchimento. A placa continua sendo o único dado mínimo para gravar um checklist no Firebase.
- **Status do checklist**: cada registro passa a ser gravado como `em_producao` enquanto houver itens pendentes e `concluido` quando atingir 100%.
- **Retomada sem duplicar**: o ID do checklist salvo passa a fazer parte do rascunho local. Ao fechar e abrir novamente, o mesmo registro continua sendo atualizado.
- **Tela inicial com fluxo direto**: `Novo checklist`, `Em produção` e `Todos os salvos`.
- **Consulta por status**: filtros `Todos`, `Em produção` e `Concluídos`, com percentual e quantidade de pendências.
- **Continuar checklist em produção**: ao abrir um registro incompleto, o app leva diretamente à primeira seção que ainda possui item pendente.
- **Atalho por seção**: `Pendentes = OK`, com confirmação explícita. Ele altera somente itens ainda não marcados e não sobrescreve Atenção/Trocar/Revisar/etc.
- **PDF simples para equipe**: relatório enxuto, sem preços, agrupando exatamente o que foi marcado como Trocar/Substituir, Retificar, Regular/Ajustar, Lubrificar, Limpar/Higienizar e Revisar/Atenção.
- **Compartilhamento do PDF**: usa o compartilhamento nativo do aparelho quando disponível para selecionar WhatsApp/grupo. Se o aparelho não aceitar compartilhamento de arquivo pelo navegador/PWA, o PDF é baixado para anexo manual.
- **Proteção de relatório incompleto**: se o PDF da equipe for gerado com checklist ainda em produção, aparece um aviso destacado com quantidade de itens não avaliados e percentual já preenchido.
- **Datas preservadas**: editar um checklist não redefine mais sua data original de criação; `atualizadoEm` continua registrando a atualização.
- **Modelo técnico ampliado com 10 lacunas encontradas nas O.S. reais analisadas**: bucha/borracha da barra estabilizadora, válvulas de pneus, polia/rolamento do alternador, mangueira de admissão/circulação/respiro, anéis/vedações dos bicos, anti-chama/PCV, reservatório de partida a frio, mangueira/bocal do tanque, retentor do virabrequim e amortecedores do capô.
- **Migração segura do modelo**: a versão nova acrescenta somente esses itens quando o modelo salvo/remoto ainda é antigo, sem apagar seções e itens personalizados da oficina.
- **Versão e cache unificados**: app, scripts, Service Worker, pacote e workflow do APK atualizados para V15.21.

## Preservado

- Login e permissões atuais.
- Mesmo Firebase/tenant da oficina.
- Integração com O.S. do Jarvis.
- Histórico por placa.
- Fotos por item e fotos gerais.
- Cloudinary.
- PDF técnico completo.
- PDF de cotação.
- XLSX.
- Checklist de entrega.
- Impressão manual A4.
- Editor do modelo por gestor.
- PWA e build APK por GitHub Actions.
