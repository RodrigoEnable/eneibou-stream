import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  private diaries: { [key: string]: { day: string, content: string[], isDead?: boolean }[] } = {
    'diario-sr-lourdes': [
      {
        day: '01',
        content: [
          'Assim que joguei as flores no caixão eu comecei a ouvir batidas... E elas vinham de dentro... do caixão!',
          'Então comecei a gritar: Abram o caixão! Abram o caixão! Lourdes está viva! Ela está viva! Todos no enterro continuaram parados, sem reação.',
          'Pulei sobre o caixão e tentei abrir, mas não conseguia. Comecei então a arranhá-lo, até o ponto que as minhas unhas começaram a sangrar. E as batidas cada vez mais altas, cada vez mais altas, até que...',
          'Esse foi o sonho que tive. Acordei com o coração acelerado, não sei quantas horas dormi depois de ingerir todos aqueles remédios. Foi então que percebi as batidas na janela, insistentes. Pensei, "quem está a bater na janela a essas horas"? Fui até a sala, abri a cortina, e um susto enorme:  Edna, a vizinha, com a cara pálida, olhos arregalados, a bater na janela. Logo pensei, "o cachorro do Bob defecou no quintal dela novamente". Mas depois novo susto: Bob apareceu ao lado dela e começou a bater na janela também, com a mesma cara pálida mas... com uma faca enfiada no peito.',
          'Não era Halloween, não entendi nada, porque queriam me assustar? Esbravejei mas não adiantou, eles não saíram da personagem. Enquanto pensava no absurdo daquela situação eles quebraram a janela.  Foi então que ouvi os gemidos. Lembrei dos filmes de zumbis que Joshua costumava assistir e finalmente entendi as personagens.',
          'Eles pularam a janela... arrastaram o corpo nos cacos de vidro... Só depois de tudo isso entendi que havia algo estranho acontecendo...',
          'Gritei: Edna! Bob! O que aconteceu com vocês!? Eles apenas gemiam. Levantaram e começaram a caminhar na minha direção.',
          'Meu corpo estremeceu, o que está acontecendo? Fiquei por um tempo paralizado. Edna aproximou-se e abriu a boca na intenção de me morder, fiz um embate de forças e consegui a derrumar, mas logo em seguida Bob avançou em mim. Segurei a cara dele em desespero. A bocarra aberta para arrancar um pedaço de mim. Bob era um homem forte de 36 anos e eu tenho 61, foi difícil escapar dele, mas consegui derrubá-lo forçando-o contra a mesa de centro. Assim que ele caiu corri na cozinha e apanhei a faca que estava na gaveta, enquanto fazia isso, eles já começavam a se levantar lentamente.',
          'Eu não sabia o que fazer. Ferí-los? São meus vizinhos! Mas já estão mortos? Não! Edna era amiga de Lourdes! Eu devo estar preso em outro pesadelo!',
          'Mas aquilo era um pesadelo da vida real. Edna novamente tentou me morder e instintivamente a esfaqueei, porém ela continuou a avançar como se nada tivesse acontecido...',
          'Por um segundo eu pensei: "Para que continuar? Eu não tenho motivo algum para isso." E naquele momento, encurralado na cozinha, ouvi a voz de Lourdes: "Somos um, enquanto você estiver vivo, eu também estarei".',
          'Meus olhos enxeram de água e veio à tona o jovem Jeremias, destemido, e todos os horrores da guerra que consegui esquecer após anos de terapia. Fiquei atordoado por um momento mas logo o jovem Jeremias, com todo sangue que carregava nas mãos, tomou controle do velho Jeremias, e em poucos momentos a cozinha estava banhada de sangue com dois corpos no chão.',
          'Caminhei até a sala, sangue escorria das minhas mãos deixando um rastro vermelho. Abri a porta. Foi então que me dei conta de que estava num filme de terror na vida real. O que vi poderia ser aterrorizante para alguns, mas não para mim.',
          'Como isso pode ocorrer na vida real? Zumbis? Mas eu... Eu ainda estou aqui, vivo.',
          'Perdoe-me meu Deus, perdoe-me por tudo que fiz porque fui cego, porque acreditei no que me disseram que devia ser feito. Sei que talvez isso seja um castigo pelo meu passado. Minha morte é justa, mas não vou morrer aqui e agora.',
          'Vou dar descanso a todos que agora vivem atormentados e protegerei Lourdes dentro de mim.',
          'Lourdes, quando eu estiver os enfrentando, feche os olhos, por favor. Não quero que veja o que vejo, esse fardo será somente meu.',
        ]
      },
      {
        day: '02',
        content: [
          'Logo de manhã cedo procurei por notícias do que estava acontecendo mas os noticiários estavam normais. Tentei ligar para a delegacia de Riverside mas a telefonia não funciona. Será que está a acontecer somente aqui em Echo Creek?',
          'Peguei minha M9 e consegui juntar muitos deles no campo de agricultura dos Tuller. Não foi fácil dar descanso a eles por vários motivos. O primeiro é que faziam alguns anos que não disparava. No começo errei alguns tiros mas depois comecei a afinar a pontaria. O segundo é que tive que me movimentar com rapidez e atenção para escapar deles mas a idade pesa, foi bastante desgastante. Durante o dia tive que fazer algumas pausas escondido, meu corpo pedia descanso, por sorte eles são muito lentos. O terceiro é que são todos rostos conhecidos, um punhado de parentes e muitos amigos... Meu emocional está destruído, chorei durante todo o dia, mas esse era um trabalho a ser feito, Lourdes concorda que eu faça isso.',
          'Se não esqueci ninguém, a vizinhança inteira estava lá. Será que só restou eu e Lourdes na cidade inteira? Porque meu Deus? Porque?',
          'Eu tinha uma M9 e um total de 140 balas. Usei todas elas.',
        ]
      },
      {
        day: '03',
        content: [
          'Pensei em um plano, encontrar um carro e ir para West Point avisar o que está acontecendo em Echo Creek. Sim, isso é o melhor a ser feito! Isolar a cidade parece o caminho a seguir. O meu carro está em uma oficina em West Point, lá posso pegar o meu.',
          'Tem um carro parado na nossa rua, parece que a pessoa que estava a dirigir foi impedida de continuar pelos zumbis... Não lembro de ninguém com esse carro na vizinhança... Um Franklin All Terrain. Será que ela está entre os zumbis que matei? Eu precisava ter coragem e voltar ao campo ver se encontro as chaves no bolso de alguém.',
          'Encontrei as chaves no 34º corpo que vasculhei... Assim que encontrei sai correndo do campo porque o cheiro de gente morta era forte.',
          'As chaves estavam no corpo de uma mulher com capa de chuva amarela. Não era da cidade. Que azar ela teve em vir para Echo Creek nesse momento. Quando entrei no carro um grande urso de pelúcia no banco de trás e giz de cera no porta-luvas. Ela tinha uma filha, vi em uma foto. Chorei por algum tempo.',
          'O carro não tinha gasolina... Alguém deve ter retirado antes de mim. Preciso ir ao posto pegar gasolina, mas não tenho galão. Amanhã vou procurar comida, um galão e ir ao posto de gasolina.',
          'Coloquei o urso de pelúcia no quintal.',
          'Acordei no meio da noite com gemidos. Olhei pela janela mas não haviam zumbis em volta. Então percebi que a minha mente estava a reproduzir os gemidos do dia anterior... Depois ecoavam os sons dos crânios sendo perfurados... Acho que estou surtando... Lourdes, fale comigo, por favor. Me ajude.',
        ]
      },
      {
        day: '04',
        content: [
          'Estive a coletar comida na casa dos vizinhos e na venda de Suzan, dentre outros items que possam ser úteis para ataque e defesa. Consegui derrubar alguns zumbis que me atacaram no caminho, por sorte eram poucos. Achei um cano que foi muito útil.',
          'Uma casa estava a ser construída na rua de cima, e sempre tinham um furgão que fazia muitas viagens com material de construção. Então pensei que poderia encontrar um galão. Fui até lá, o furgão estava estacionado no local. Olhei na construção e nada encontrei, contudo, a porta de trás do furgão estava destrancada, e havia um galão grande. Acertei em cheio!',
          'Com o cano consegui dar descanso a alguns zumbis até o posto de gasolina e enchi o galão. Carreguei aquele galão pesado e deixei o galão próximo do carro. Sentei no banco do motorista para descansar. Por sorte nenhum zumbi apareceu.',
          'Adicionei a gasolina no carro, sentei no banco de motorista, virei a chave e o som do motor a funcionar. Porém... Ao avançar poucos metros o pneu traseiro estourou. O barulho ainda atraiu alguns zumbis que tive que dar descanço com o cano. Agora eu precisava do material para trocar pneu e de um novo pneu!',
          'Foi então que lembrei de Jonny, estava a trabalhar como taxista a pouco tempo, será que por sorte o táxi está estacionado na casa dele?',
          'Ao chegar lá, sim, o táxi estava estacionado. Um rádio estava ligado na casa de Jonny, ouvi relatos de helicópteros e militares. Em breve meus companheiros virão nos salvar Lourdes.',
          'A porta do carro estava destrancada com a chave na ignição. Mas... não tinha gasolina. E não tenho material para retirar a gasolina do carro.',
          'Teria que fazer nova ida ao posto de gasolina... Mas isso fica para amanhã, porque estamos muito cansados, não é Lourdes?',
          'Nota: Parece que o abastecimento de água foi cortado, abri a pia e não tinha mais água. Telefonia e agora água? Consequencia do pesadelo ou ordem das autoridades? Preciso arrumar água.',
        ]
      },
      {
        day: '05',
        content: [
          'Acordei ainda com dores no corpo por causa do embate físico com os zumbis. Sentia-me mais resistente, porém já tenho 61, não posso confiar plenamente nas minhas habilidades físicas. Então pensei onde poderia encontrar uma arma de fogo... Meus vizinhos certamente não tinham. Decidi rodar a vizinhança para ver se não estava a deixar escapar alguém que pudesse ter, a memória já não anda lá essas coisas.',
          'Foi então que me deparei com a casa abandonada dos Williams. Edna uma vez me pediu para ir lá porque viu jovens entrar na casa, um deles o filho de Bob, cujo nome é Jake. Como me consideravam o "xerife" da vizinhança, sempre me pediam para averiguar situações estranhas. Mas eu recusei porque Edna não gostava de Bob, então parecia usar o filho para retaliar o pai.',
          'E sim, a casa era ponto de encontro dos jovens, tanto que sempre foi toda pichada. Mas jovens fazem coisas de jovens e eu já estava aposentado, ela que ligasse para a delegacia de Riverside e falasse com Darcy sobre isso.',
          'Contudo... Dentre os zumbis que abati não estava Jake... Será que ele está escondido na casa abandonada dos Williams? É um bom local para se esconder porque as janelas são tapadas com tábuas.',
          'Antes de averiguar, tive um embate com um zumbi que estava próximo a casa. Era uma pessoa desconhecida.',
          'Entrei com cuidado na casa, segurando o cano com as duas mãos. O lugar estava imundo, na sala só tinha uma geladeira velha. Aparentemente não tinha ninguém, mas senti um cheiro podre no ar. Cheiro de gente morta.',
          'Caminhei com cuidado, e olhei comodo a comodo, no banheiro encontrei Jake morto, aparentemente espancado. E ele estava armado. Já estava morto a pelo menos três dias.',
          '"Lembro de carregá-lo no colo", Lourdes disse com tristeza...',
          'Onde ele conseguiu essas armas? Em nenhum lugar de Echo Creek ele conseguiria essas armas. De qualquer forma, elas serão muito úteis nas minhas mãos, parece que o destino nos guiou até aqui Lourdes.',
        ]
      },
      {
        day: '06',
        content: [
          'Comecei o dia determinado a buscar gasolina no posto e com muitas dúvidas. Sem telefonia e com a água a acabar, será que não deveria procurar um gerador e estocar bastante combustível? Quem garante que a energia elétrica não será cortada também? Acho que a prioriedade no momento é combustível.',
          'Então fui até o posto novamente com o galão de gasolina. Não tinham zumbis, então pensei em entrar na loja de conveniência para pegar bebidas, já que tinha pouca água em casa.',
          'Assim que abri a porta eu os vi. Um policial ao fundo e três homens do exército, dentro da loja de conveniência... Zumbificados. Eu recuei e larguei imediatamente o galão pois começavam a vir para cima de mim. Puxei o cano e tentei confundí-los para acertar um a um. Primeiro foram os três homens do exército, dei descanço a cada um deles, mas foi díficil deitá-los, então o último... O policial era Darcy, delegado de Riverside. O conhecia de longa data e reconhecer aquele rosto pálido e desconfigurado pesou meu peito. Cansado, lutei contra ele, consegui derrubá-lo mas terminei ofegante.',
          'Depois que a adrenalina baixou e que a respiração voltou ao normal, veio o baque. "Um delegado e três soldados bem equipados... Que esperança devo ter?" Sentei no chão cansado. Então Lourdes disse: "Juntos conseguimos, vamos sobreviver". Olhei para o capacete de exército no chão e vieram várias mémorias terríveis da guerra na minha cabeça, de rajada. Apertei os olhos. "Preciso continuar lúcido para proteger Lourdes". Respirei fundo e comecei a recolher os equipamentos e armas deles, separei o que dava para usar e o que não dava, as roupas eram reforçadas e me seriam úteis. Levei o distintivo de Darcy comigo.',
          'Ao entrar na loja de conveniência, vi outros corpos no chão, certamente foram atacados por zumbis e não conseguiram escapar a tempo.',
          'Levei a gasolina até o táxi, o carro está em bom estado. Voltei ao posto dirigindo, peguei os equipamentos, as armas e as bebidas e retornei para casa. Agora já tinha um carro e pensei em seguir para West Point na manhã seguinte mas Lourdes disse que precisamos ficar mais tempo em Echo Creek. Então adiei meus planos.',
          'Estou destinado a fazer isso, não é Deus? O meu castigo é dar descanso aos que morreram mas que ainda andam por aí, perdidos. É a expiação pelos meus erros, por ter tirado vidas em nome de nada, de uma guerra que levou os meus amigos e deixou os poderosos mais poderosos e ricos.',
          'Agora tenho mais armas e munição para dar descanço a eles Lourdes. Essas armas chegaram a nós sem sequer procurarmos por elas. É o meu trabalho.',
        ]
      },
      {
        day: '07',
        content: [
          'Hoje acordei cansado e resolvi ler um livro de mecânica pela manhã, para aprender alguma coisa e saber como resolver algum problema durante a viagem.',
          'A tarde retornei ao posto e encontrei um furgão preto atrás do prédio. Parecia estar em um estado aceitável e tinha bastante espaço. As chaves estavam na lanchonete anexa ao posto. E tinha gasolina!',
          'Agora temos dois carros, mas provavelmente vou trocar o táxi pelo furgão.',
        ]
      },
      {
        day: '08',
        content: [
          'Lourdes disse que preciso fazer a barba, então fui atrás de um barbeador. Ela sempre gostou do bigode mas nunca da barba cheia. Penso em procurar um gerador também, quero evitar falta de energia o que seria muito prejudicial.',
          'Desci a rua a olhar as casas em busca de um gerador, quando estava a atravessar um campo ouvi o som de um helicóptero.',
          'Lourdes, veja! Vieram nos resgatar!',
          'O helicóptero parecia ser do exército, acenei com os braços, porém nada aconteceu. Claramente ele notou a minha presença e ficou ali um tempo a voar sobre mim. Quando percebi que nada aconteceria, fiquei preocupado. Pensei em sacar a arma para minha defesa, porque claramente a intenção deles não era me resgatar. Se não fosse para resgatar, bom, eu poderia estar em perigo. Sacar a arma ali poderia decretar o meu fuzilamento.',
          'Fiquei então parado no meio do campo com eles a voar sobre mim. Depois de um tempo foram embora.',
          'O que está acontecendo? Como o exército não tenta salvar um civil? Aliás, eu estava vestido com as roupas do exército, mesmo assim não houve interesse nenhum em me resgatar.',
          'Estamos por nós Lourdes, vamos sair dessa juntos.',
          'O helicóptero apenas me trouxe trabalho porque atraiu zumbis para perto da minha casa e tive que limpar a área novamente.',
          'Depois de limpar a área queria apenas descansar. Tenho deixado de lado as armas de fogo porque preciso aprimorar meu físico. Abater os zumbis com força bruta não é o meu perfil, é muito desgastante para mim, mas tento imaginar que estou a partir abóboras... São apenas abóboras... São apenas abóboras, não é Lourdes?',
          'O delicioso doce de abóbora de Lourdes, a receita é confidencial, como os protocolos do exército.',
          'Barbeador e gerador ficam para amanhã.',
        ]
      },
      {
        day: '09',
        content: [
          'Consegui encontrar o gerador no depósito de Suzan, fica logo a frente da venda, do outro lado da rua. Suzan disse-me certa vez que tinha comprado um gerador para salvar suas tortas e bolos das quedas de energia. Por acaso fui lembrar disso só depois de arrombar a porta do depósito e encontrar o gerador lá dentro. Infelizmente o seu esposo, Steve, estava lá dentro zumbificado, dei o devido descanço a ele.',
          'Suzan, por acaso, não está entre os zumbis que abati. Rezo para que esteja bem.',
          'Hoje também vasculhei as casas menores da rua principal da cidade, porém não encontrei o barbeador.',
          'O gerador está dentro do furgão, ainda não o conectei a casa. Confesso que estou meio perdido, enquanto Lourdes não disser que podemos sair de Echo Creek, eu fico aqui, mas se ficarmos aqui acredito que não podemos continuar na nossa casa. Teremos que procurar um local distante onde os zumbis demorem a encontrar.',
          'A melhor solução na minha cabeça é sair da cidade e ir para um lugar seguro, o meu plano de ir para West Point. Mas vou aguardar Lourdes, a palavra final será sempre dela.',
          'Também preciso aprender coisas, porque a comida fresca começa a estragar e precisaremos encontrar formas sustentáveis de nos manter.',
          'Sigo preocupado com a água, mas a prioridade no momento é o pedido de Lourdes: o barbeador.',
        ]
      },
      {
        day: '10',
        content: [
          'Acordei com Lourdes a dizer que não podemos descuidar de nós. Pediu para que eu colocasse os anéis e brincos dela. Eu tinha eles guardados na gaveta da mesinha de cabeceira. Coloquei todos os brincos e anéis que lá haviam, também o colar dela.',
          'Ela ficou feliz.',
          'Sai de casa cedo porque decidi instalar o gerador no posto como forma de precaução. Se a energia acaba continuamos a ter gasolina.',
          'Lourdes insiste que eu tire a barba e deixe o bigode, como ela gosta. Então fui atrás do barbeador.',
          'Procurei em todos os lugares mas não encontrei o barbeador, porém encontrei mais um gerador no parque. Sim, precisávamos de mais um gerador, se a luz acabar precisamos ter um gerador na casa e um gerador no posto, para termos gasolina.',
          'Levei o gerador e instalei na casa.',
        ]
      },
      {
        day: '11',
        content: [
          'Discuti com Lourdes. Estou impaciente, ela insiste que fiquemos em Echo Creek mas estamos muito desprotegidos aqui.',
          'Peguei o carro e fui explorar os arredores sem o consentimento dela, decidi procurar por um lugar seguro. Passei por uma fazenda e parei o carro. As vacas estavam lá, nada aconteceu com elas. Aparentemente os animais não foram afetados.',
          'Continuei o caminho e encontrei a loja Blair\'s Potted Paradise. Dei descanço aos dois atendentes e peguei algumas coisas lá.',
          'Sinto-me mais confiante no combate corpo a corpo com eles.',
          'Voltei para casa e coloquei gasolina no gerador, havia esquecido ontem.',
          'Lourdes após a discussão não disse mais nada. Fiz uma comida gostosa, bem temperada no fogão, como pedido de desculpas para ela.',
          'Ele gostou mas continuou zangada comigo, espero que amanhã tudo volte ao normal.',
        ]
      },
      {
        day: '12',
        content: [
          'Era importante explorar o entorno de Echo Creek, mesmo que Lourdes não concorde. Então comecei o dia explorando o entorno mas o silêncio de Lourdes estava me deixando louco... E rapidamente cedi, voltei para Echo Creek.',
          'Porque Lourdes não fala comigo? Discuti com ela porque quero protegê-la!',
          'Já sei, é a minha aparência! Ela está chateada porque estou descuidado. Vou procurar mais uma vez o barbeador, se não encontrar faço a barba com faca!',
          'Explorei outras residências em Echo Creek em busca do barbeador. Precisava encontrá-lo. E finalmente o encontrei.',
          'Em uma das casas havia um pouco de água na torneira, então resolvi tomar um banho e lavar as minhas roupas.',
          'Cheguei em casa e fui fazer a barba, mas Lourdes me impediu - em completo silêncio.',
          'Você pediu para eu fazer a barba! Você está me enlouquecendo Lourdes! Porque está fazendo isso comigo?',
          'Eu fiquei transtornado.',
          'Tirei toda aquela roupa molhada e fui dormir. Era o melhor a se fazer naquele momento.',
          'Acordei e vesti as roupas que já tinham secado.',
          'Precisava distrair a cabeça.',
          'Respirei fundo e pensei o que poderia fazer... Talvez aprender carpintaria. Assisti uns programas na TV sobre o assunto e fiquei interessado, mas preciso de um martelo.',
          'Pronto, é isso, vou atrás de um martelo!',
        ]
      },
      {
        day: '13',
        content: [
          'Lembrei da transportadora Sppedy Go, é provável que tenham martelo lá.',
          'Encontrei alguns zumbis fora e dentro do local. Tentei evitar o combate corpo a corpo dessa vez, até mesmo para evitar de sujar toda a roupa que havia lavado recentemente, mas foi a pior coisa que poderia ter feito.',
          'Eu estava desconcentrado, o fato de Lourdes não conversar comigo estava me deixando muito mal. Desperdicei balas, errei tiros, e apenas trouxe mais zumbis para o local. Coloquei eu e ela em perigo.',
          'O pior não ocorreu, mas foi tudo em vão, não encontrei martelo algum lá.',
          'Então fui procurar nas casas. Numa delas quase fui dilacerado por dois zumbis, escapei por um triz deles.',
          'Pensei que era melhor voltar para casa, não estou bem, continuar é arriscado.',
          'Peguei o carro e terminei o dia a ler um pouco sobre alvenaria.',
          'Fomos dormir e Lourdes continuou em silêncio.',
        ]
      },
      {
        day: '14',
        content: [
          'Mais um dia sem Lourdes a falar comigo. Pensei que ia surtar, sentia-me sozinho.',
          '"Preciso fazer alguma coisa para não surtar", eu pensei.',
          'Decidi procurar o martelo nos arredores de Echo Creek.',
          'Após rodar com o carro por algum tempo encontrei uma casa grande de fazenda, com certeza esses tinham um martelo. Perto da casa tinha uma construção de madeira com umas caixas, encontrei não só um, mas dois martelos.',
          'Voltei logo para Echo Creek e tentei praticar o que aprendi no programa. Cortei uma árvore, serrei e fiz tábuas, então construí dois baldes, mas o resultado ficou muito aquém do que esperava.',
          'Na casa grande da fazenda também havia um poço, por um momento pensei que seria um bom lugar para estabelecer nova morada. Como já não tenho água na torneira a algum tempo, optei por voltar lá e pegar água.',
          'Ao chegar e olhar a água não parecia potável, seria necessário ferver para remover as inpurezas.',
          'Resolvi explorar a casa para ver se encontrava recipentes para carregar a água e me deparei com um zumbi. Quando comecei a lutar com ele com a chave de fenda que tinha nas mãos, um segundo zumbi apareceu do meu lado de repente e não tive reflexo para me livrar do golpe dele.',
          'Fui arranhado, nesse momento voltei a ouvir a voz de Lourdes. Serena, ela mandou eu desinfectar a ferida e estancar o sangramento. Prontamente corri para fora da casa e fiz a desinfecção, depois passei uma bandagem que carrego comigo.',
          'Dei descanço aos dois zumbis.',
          'Fiquei na casa grande da fazenda no restante do dia, cuidando de mim.',
          'Eu estava muito nervoso, não sabia se aquele arranhão podia me transformar em um deles. Estava apreensivo.',
          'Resolvi ler um livro e voltar para Echo Creek somente no dia seguinte. Virei a noite a ler.',
          'Quando terminei de ler o livro Lourdes sorriu para mim.',
          'Os últimos dias estavam nebulosos, o sorriso de Lourdes abriu o céu.',
          'Não será esse arranhão que vai me derrubar.',
        ]
      },
      {
        day: '15',
        content: [
          'Não descuidei nenhum segundo de cuidar do arranhão. A ferida parecia evoluir para a cura e eu não senti nada de estranho, apenas a dor de uma ferida qualquer. Penso que se for atacado por zumbis, talvez eu apenas morra. Quero acreditar nisso, não queremos ser mais de um deles, não é Lourdes?',
          'Depois de cuidar do arranhão o que fiz foi fazer a barba, Lourdes ficou a observar.',
          'Depois que terminei de barbear, ela disse-me: "A casa onde passamos as férias no nosso primeiro ano de casados".',
          'Finalmente ela disse onde deveríamos ficar em definitivo. Essa casa não ficava muito longe de Echo Creek. Era uma casa na beira de um lago, foram férias maravilhosas, estávamos em perfeita sintonia e em comunhão com a natureza.',
          'Sim, o local era perfeito para ficar longe dos zumbis. Mas... Essa casa talvez nem exista mais Lourdes.',
          'O orfanato... A casa ficava a caminho de um orfanato. É uma estrada muito longa que leva ao orfanato, e passa ao lado do lago onde tem a casa que ficamos nas férias. Só que esssa estrada está fechada já fazem anos porque descobriram que coisas estranhas aconteciam no orfanato. Coisas estranhas ao nível de intervenção militar. Foi algo muito confidencial, perguntei a um amigo internamente e ele disse que não poderia me dizer nada sobre. O orfanato foi desativado, cercado, e a rua interditada.',
          'Aquela área está completamente esquecida. E... Ela logo cortou o que ia dizer e insistiu que deveria ser lá.',
          'E se não houver nada lá? Indaguei. Ela respondeu: "Se a casa não estiver lá, construímos uma nova".',
          'Mas eu não sei praticamente nada de construção. E ela respondeu: "Você aprende, você é capaz de fazer qualquer coisa".',
          'Lourdes estava irredutível e eu confio nela. Então o plano para os dias seguintes era claro e objetivo: mudar para aquela casa. Havia muito trabalho a ser feito, e durante todo o dia organizamos as coisas. Seria necessário fazer mais de uma viagem para levar todas as coisas.',
          'Mas primeiro tínhamos que sondar a situação. Farei uma ida ao local amanhã.',
        ]
      },
      {
        day: '16',
        content: [
          'O primeiro passo era verificar o caminho até a casa. Estamos nesse purgatório por 16 dias mas não fui muito distante de Echo Creek.',
          'Logo cedo peguei o furgão e segui caminho. Conforme avançava na estrada, um zumbi ou outro aparecia ocasionalmente, até então não haviam muitos deles, pelo menos não juntos ou no alcance da minha vista.',
          'Mas quando peguei a estrada que leva até a rua da casa do lago... Eles começaram a aparecer, em maior número. Quando cheguei a rua, haviam muitos deles, a densidade era tamanha que acabei por atropelar alguns.',
          'E ainda havia outro problema: a rua estava interditada por cavaletes movéis e fixos. Ou seja, para chegar a cabana eu precisaria tirar os cavaletes móveis e desmontar os fixos. Limpar a área era fundamental, eu não conseguiria fazer isso com zumbis em volta, seria muito arriscado.',
          '"O trabalho precisa ser feito", pensei. Coloquei a escopeta nas costas e desci do furgão. Tinha 16 balas de calibre 12, utilizei todas elas.',
          'Então parti para o confronto corpo a corpo, fui deitando um a um. Mas logo fiquei cansado e ainda haviam muitos deles. Entrei no carro e o utilizei para matar mais alguns. Eu sabia do risco que estava a ter em ferrar o furgão, mas precisava limpar a área a qualquer custo.',
          'Mesmo atropelando alguns, ainda tinha um bom número para deitar e já estava anoitecendo. Eu estava com muito sono.',
          'Lourdes, é hora de recuar, amanhã terminamos isso. Entrei no furgão e comecei a fazer o caminho de volta.',
          'Por um momento cochilei no volante, quando abri os olhos estava a poucos metros de um carro queimado e o inevitável aconteceu, eu bati de frente com o furgão. Senti a dor do impacto mas não aconteceu nada de pior comigo, porém o motor do furgão ficou seriamente danificado.',
          'Girei a chave algumas vezes para que o motor ligasse novamente e quando o ouvi roncar, percebi o quanto estava mal.',
          'Droga! Isso não podia ter acontecido Lourdes!',
          'Voltei com mais cautela. Quando cheguei em casa fui direto para a cama.',
        ]
      },
      {
        day: '17',
        content: [
          'Esse furgão vai me deixar na mão quanto mais eu precisar. Não sou mecânico, mas era claro como o motor está nas últimas só de olhar para ele.',
          'Não sei arrumar motor, mas posso trocar um pneu. Me veio a cabeça o Franklin All Terrain, se eu conseguisse um macaco e a roda do mesmo modelo, poderia trocar a roda e colocá-lo para andar.',
          'Foi então que percebi que o furgão da construtora parado na rua acima tinha rodas que serviam para o Franklin All Terrain.',
          'O dia foi ir atrás de um macaco. Consegui encontrá-lo, afinal. E o melhor, encontrei outro furgão, menor infelizmente, mas com chave na ignição. Trouxe o macado e o novo furgão para casa, que estava num estado aceitável.',
          'De qualquer forma amanhã trocarei o pneu para termos opções.',
        ]
      },
      {
        day: '18',
        content: [
          'Um dia de mecânico que não deu certo. Retirei as rodas do furgão da construtora, meti no Franklin All Terrain, até troquei a bateria por outra que encontrei em melhor estado. Parecia ter dado certo. "Parecia".',
          'Ao ligar o motor e andar poucos metros, as rodas que troquei soltaram. Onde estou a falhar? Não sei, talvez as rodas não sejam compatíveis, afinal. Aprendi qualquer coisa sobre mecânica mas considero esse um dia perdido.',
          'Pelo menos fiz Lourdes sorrir quando as rodas rolaram rua à fora.',
        ]
      },
      {
        day: '19',
        content: [
          'O tempo está a passar e preciso terminar de limpar a área e desbloquear a rua. Decidi não arriscar ir com o novo furgão e peguei o táxi. Coloquei as ferramentas necessárias no carro e segui caminho.',
          'Consegui limpar a área, acabei por também utilizar o táxi para esse fim, passando por cima dos zumbis.',
          'Comecei a trabalhar na remoção dos cavaletes e consegui fazê-lo. Já estava a anoitecer mas decidi seguir na rua para entender o caminho.',
          'A rua está em péssimo estado e no final dela a situação ficou pior. Zumbis, e não apenas isso. Uma parte cedeu para o lago, e o que restou da rua se deteriorou e agora está coberto de árvores.',
          'Ou seja, para eu conseguir chegar a casa do lago de carro eu precisaria primeiro limpar a área de zumbis, depois recompor aquele pedaço da estrada que cedeu.',
          'O plano era claro, as árvores que ali nasceram eu derrubaria para utilizar a madeira na reconstrução daquele pedaço da rua, o suficiente para o carro passar.',
          'Se eu trabalhar o dia todo, talvez seja possível em três dias.',
        ]
      },
      {
        day: '20',
        content: [
          'Lourdes e eu acordamos com um estrondo. A luz acabou. Minha suspeita se confirmou, por sorte já tenho o gerador.',
          'Adicionei gasolina e o liguei, temos luz.',
          'Logo após arrumar o gerador, segui direto para a rua da casa do lago. Limpei os zumbis e comecei os trabalhos.',
          'O despertador do relógio está ligado. Durante esses dias vou dormir cinco horas.',
        ]
      },
      {
        day: '21',
        content: [
          'Obra na rua da casa do lago.',
        ]
      },
      {
        day: '22',
        content: [
          'Obra na rua da casa do lago.',          
        ]
      },
      {
        day: '23',
        content: [
          'Consegui terminar a obra mas arrumei um grande problema por ser inconsequente.',
          'Voltei rapidamente para Echo Creek e carreguei o táxi com algumas coisas para já deixar na casa do lago.',
          'Lourdes estava muito contente e eu também. Carreguei o carro, sentei no banco do motorista e abri uma garrafa de vinho para comemorar.',
          'Lourdes brigou comigo, que não podia beber já que ia dirigir. "Mas hoje é um dia especial Lourdes", eu disse a ela.',
          'Lembra Lourdes? Na primeira noite que passamos na casa do lago abrimos uma garrafa de vinho! E depois de todo esse tempo vamos retornar para a casa do lago.',
          'Eu trabalhei duro! Eu mereço!',
          'Tomamos o vinho e ele acabou rápido. Lourdes bebeu mais do que eu! Então abri uma segunda garrafa de vinho... E o bebi todo.',
          'Liguei o carro e segui caminho. Admito que senti meus reflexos ruins, mas não queria adiar a ida, o que foi um erro. Logo após atravessar pela área da obra, já não lembrava de mais de nada.',
          'Foi então que aconteceu... Quando eu olhei já era tarde demais, havia um táxi incendiado bem na minha frente, consegui desviar mas bati de frente com uma árvore. Minha sorte é que estava com o cinto de segurança que Lourdes me obrigou a usar por ter bebido.',
          'Minha mente desligou, simplesmente desligou.',
          'Quando abri os olhos após o impacto vi que estava coberto de cacos de vidro.',
          'Ouvi gemidos. O barulho atraiu zumbis que estavam perdidos dentro da mata.',
          'Tirei o cinto e sai do carro cambaleante, senti um feixo de sangue a escorrer da testa. Apareceram dois zumbis que consegui abater.',
          'Quando olhei em volta... Não fazia ideia de onde estava.',
          'Após algum tempo percebi que provavelmente já passei pela casa do lago. Andei alguns metros na rua e vi uma grade com uma placa, "área restrita". Sim, eu havia passado da casa do lago e estava no orfanato. Quando olhei para aquele prédio abandonado subiu um arrepio na espinha. "Joshua"... Lourdes virou meu rosto. "Não olhe", disse ela.',
          'Dei dois tapas no meu rosto. "Acorda"! Gritei comigo mesmo.',
          'Voltei para o carro, sentei no banco do motorista e girei a chave.',
          'Nada aconteceu. O motor estava morto. "Meu Deus, como vou voltar por todo esse caminho a pé? Por favor, não me puna mais".',
          'Eu não tinha outra opção senão voltar a pé.',          
        ]
      },
      {
        day: '24',
        content: [
          'Chegamos famintos mas não tinha muita comida em casa. Preparei algo com comida enlatada e comemos.',
          'Eu estava com muito sono mas não podia perder muito tempo, era o momento de começar mudança. Coloquei um alarme e acordei as 17h.',
          'Então carreguei o furgão e segui rumo a casa do lago, sóbrio e desperto.',
          'Fiz o caminho e procurei por uma entrada na mata, lembro que era uma rua de terra.',
          '"É ali"! Lourdes apontou.',
          'Eu virei o furgão onde Lourdes apontou mas a estrada não era utilizada a algum tempo e já tinham árvores a crescer.',
          'Vou ter que abrir caminho com o machado Lourdes.',
          'Já era noite, deixei os faróis do furgão acessos e comecei a derrubar as árvores que impediam o furgão de passar.',
          'Repentinamente surgiram zumbis. Alguns eu abati com o machado, outros atropelei com o furgão, estava cansado por causa da derrubada das árvores.',
          'Conseguimos abrir caminho.',
          'Lourdes estava apreensiva na esperança de ver a casa. E eu também.',
          'Alguns metros a mais avistamos ela. Começamos a rir, felizes por saber que ela estava lá, foi um momento incrível.',
          'A casa estava abandonada, suja, mas limpar aquela casa é um trabalho que faria com muito prazer.',
          'O restante do dia foi tomar um banho no lago e lavar as roupas. Fiz a barba também.',
          'Lourdes estava muito feliz, era tudo o que ela queria.',
          'Agora sim Lourdes, agora sobreviveremos juntos e protegidos nessa casa.',          
        ]
      },
      {
        day: '25',
        content: [
          'Comecei o dia removendo o lixo mas logo Lourdes disse para deixar isso para depois, tínhamos que começar a fazer a mudança.',
          'Penso que deve levar uns quatro ou cinco dias de ida e volta para carregar tudo que temos. Precisamos começar o quanto antes, ela tem razão.',
          'Guardei as coisas que estavam no furgão e voltei para a estrada.',
          'Passei no posto e abasteci o veículo, estava no fim a gasolina.',
          'Vou dormir bastante para começar a mudança seriamente amanhã.',          
        ]
      },
      {
        day: '26',
        content: [
          'Muito trabalho com a mudança. Instalei o gerador na casa do lago.',          
        ]
      },
      {
        day: '27',
        content: [
          'Muito trabalho com a mudança.',         
        ]
      },
      {
        day: '28',
        content: [
          'Em uma nova ida para buscar nossos pertences o pneu dianteiro esquerdo arrebentou. Consegui continuar a guiar o furgão mas vou precisar arrumar um pneu.',          
        ]
      },
      {
        day: '29',
        content: [
          'Amanheci faminto, precisamos encontrar comida Lourdes.',
          'Chegamos em Echo Creek, fui procurar comida no posto.',
          'A única coisa que encontrei foi um pacote de açúcar, estava com muita fome e foi o que comi para aliviar um pouco.',
          'Precisamos pescar e plantar Lourdes.',
          'Encontrei dentro da lanchonete as chaves de um carro que estava parado bem na frente do posto.',
          'O carro está em excelente estado, que sorte!',          
        ]
      },
      {
        day: '30',
        content: [
          'Esse é o dia que marcou o nosso fim...',
          'Tentei fazer reboque do furgão mas não deu certo, parece que o carro não consegue levar o furgão com todas as coisas da mudança dentro.',
          'Eu estava obsecado pela ideia de rebocar o furgão com as coisas, esse foi o meu erro.',
          'Estava virado também, com muito sono e cansado, mas queria fazer a viagem, porque ainda tinha que fazer mais uma depois.',
          'Enquanto tentava arrumar uma forma de levar o furgão, zumbis começaram a aparecer. Foi então que aconteceu... Errei um golpe zonzo de sono e um zumbi me mordeu na barriga.',
          'Gritei de dor, Lourdes começou a chorar. Eu me afastei do zumbi e rapidamente desinfectei a ferida e fiz um curativo.',
          'Abati os zumbis que restavam e voltei a ver do furgão.',
          'Lourdes gritou comigo: "Deixe isso para lá! Amanhã tratamos disso, volte para casa e descanse"!',
          'Ela tinha razão. Ela sempre tem razão.',
          'Durante a viagem comecei a sentir calafrios, depois comecei a suar e ficar ansioso em um nível que nunca senti antes. Quando chegamos em casa tinha enjoo.',
          'Retirei a bandagem e a ferida tinha um aspecto ruim... Depois de mais algumas horas comecei a ter lapsos de consciência. Estava muito febril e estranho...',
          'Entendemos o que o corpo estava a dizer.',
          'Durante toda a noite Lourdes ficou do meu lado, segurou a minha mão. Mesmo com sono não conseguia dormir.',
          'Lourdes, meu amor, desculpe. Eu falhei. Eu sei que vou me tornar um deles, mais cedo ou mais tarde. Eu falhei em te proteger dentro de mim.',
          '"Está tudo bem", Lourdes disse com um sorriso. "Estive aqui esse tempo todo para apoiá-lo nesse momento difícil. Eu sabia que em algum momento isso iria acontecer, por isso queria que tudo terminasse aqui, na casa do lago".',
          '"Você conseguiu, você chegou até aqui". Ela disse, serenamente.',
          'Eu comecei a chorar. Sim, estamos juntos na casa do lago. Aqui foi o nosso início e agora é o nosso fim.',         
        ]
      },
      {
        day: '31',
        content: [
          'Amanheceu.',
          'Peguei a M9 na gaveta e fui para a frente do lago.',
          '"Como é lindo Lourdes, como esse lago é lindo", disse a ela.',
          'Nos abraçamos.',          
        ]
      },
      {
        day: '32',
        content: [
          '[NÃO HÁ MAIS REGISTROS NESTE DIÁRIO]'
        ],
        isDead: true
      },
    ],
    'diario-policial-coleman': [
      {
        day: '01',
        content: [
          'Meu pai me ligou cedo e pediu para suspender qualquer atividade e ir para Nova York ao encontro dele. Eu perguntei o porque, ele disse que não podia dizer mas que deveria fazer isso, era uma ordem.',
          'Assim que desliguei a chamada, uma nova chamada entrou logo em seguida na delegacia de Rosewood. Era um jovem de Echo Creek muito assustado. Ele disse que viu gente morta em uma casa quando olhou pela janela e que precisava de ajuda.',
          'A princípio parecia um trote, o garoto falava enrolado, parecia chapado com alguma droga, mas o desespero dele... Aquilo parecia real.',
          'Perguntei o nome dele, disse que chamava-se Jake.',
          'Perguntei qual era a casa, ele não soube explicar, disse apenas "ambulância". Depois a ligação caiu.',
          'Ambulância? Mas Echo Creek não tem hospital...',
          '"Vou atender esse chamado e sigo para Nova York logo em seguida", pensei.',
          'Expliquei a ligação para Grace e perguntei se ela tinha alguma pista sobre ambulância em Echo Creek.',
          '"Minha mãe é paramédica e as vezes deixa a ambulância estacioanada em frente de casa", disse ela.',
          'Trocamos olhares assustados.', 
          'Só tínhamos uma viatura disponível no momento e George precisava usá-la para patrulhar Rosewood a noite. Então pedimos a George que nos levasse para Echo Creek e depois de verificar a situação ele poderia retornar para nos buscar.',
          'Chegamos no final do dia, a ambulância estava parada na frente de casa, mas a mãe de Grace não estava lá.',
          'Sei que está preocupada Grace mas vamos esperar amanhecer para iniciar a busca, disse a ela. Amanhã começamos a investigar.',
          'Dormimos na casa da mãe de Grace. Quando acordei Grace não estava lá.',
          'Droga! Está a agir sem mim! Fiquei irritado.',
          'Quando olhei pela janela vi um aglomerado de pessoas paradas na rua. Ouvi gritos também, não muito distante.',
          'Sai e fui ver o que era.',
          'Do gramado da casa de mãe de Grace gritei para as pessoas: "Sou o policial Joe Darcy Coleman, preciso de informações"... Então percebi os gemidos que faziam...',
          'Viraram a cabeça na minha direção e começaram a ser mover lentamente. Tinham um aspecto estranho, rostos pálidos, um parecia ter uma ferida na perna, outro no braço.',
          'Um deles começou a correr na minha direção com a boca aberta e a gritar como um animal selvagem.',
          'Sim, eles queriam me matar.',
          'Tive um embate corpo a corpo com eles. Depois de algum tempo consegui matar os quatro.',
          'Eu estava completamente aterrorizado. O que foi aquilo? Eram pessoas que não estavam em seu estado normal.',
          'Voltei para dentro da casa, bebi uma água e tentei me acalmar.',
          'Grace, preciso procurar Grace!',
          'Saí de casa cauteloso a procurar Grace. Foi então que a encontrei...',
          'Ela e a mãe... Meu Deus... O olhar vazio a caminhar na minha direção.',
          'Grace! Acorde Grace! Eu gritei mas não adiantou. Apenas atraiu mais pessoas no mesmo estado que elas.',
          'Grace abriu a boca e tive que a conter. Consegui a derrubar e a matei. Depois a mãe. E depois vieram os outros, que matei.',
          'Voltei para a casa da mãe de Grace sem fôlego, o embate foi pesado, chorei.',
          'O que está acontecendo? Será que meu pai sabia de algo? Será que é por isso que ele ordenou que fosse para Nova York?',
          'Eles parecem... Zumbis. Algum tipo de infecção?',
          'Milhares de perguntas na minha cabeça. Estava atordoado.',
          'Então lembrei quem era. Um policial, filho de Darcy, preciso me acalmar e investigar isso tudo.',
          'Vou investigar o corpo de Grace, talvez me dê alguma pista.',
          'Não havia nada de diferente no corpo de Grace, realmente não tinha pistas de por onde começar.',
          'Droga.'
        ]
      },
      {
        day: '02',
        content: [
          'Um dos meus planos é chegar ao posto de gasolina, se eu conseguir um pouco de gasolina posso utilizar a ambulância para percorrer a cidade, assim consigo ter uma dimensão melhor da situação.',
          'Também preciso encontrar alguma comida pois não tem praticamente nada na geladeira da mãe de Grace.',
          'Ao caminhar um pouco percebi que teria que usar a arma para abrir um caminho tranquilo, então comecei a limpar o caminho na bala.',
          'Durante todo o dia abati um punhado deles e consegui alguma comida e algumas ferramentas úteis.',
          'Amanhã quero seguir na rua principal que leva até o posto.',
        ]
      },
      {
        day: '03',
        content: [
          '[NÃO HÁ MAIS REGISTROS NESTE DIÁRIO]'
        ],
        isDead: true
      }
    ],
    'diario-policial-fox': [
      {
        day: '01',
        content: [
          'Recebi o chamado de Joe Darcy Coleman logo cedo, uma carona para ele e Grace até Echo Creek.',
          'Pensei, "man, mas esse engomadinho filho do delegado é folgado". Darcy foi não sei pra onde com a primeira viatura, devia cobrar o pai e não atrapalhar o meu trabalho.',
          '"Mas tudo bem, eu levo eles", pensei. E levar eles foi meu maior erro.',
          'Quando os deixei em Echo Creek, enquanto voltava para Rosewood, a viatura começou a cuspir fumaça pelo capô e um cheiro de queimado insuportável tomou conta.',
          'Saí do carro rapidamente e, quando abri o capô, fogo.',
          'Eu tentei apagar e não consegui, fiquei ali parado vendo a viatura arder.',
          'Eu estava com muita raiva naquele momento. Era noite, teria que voltar todo o caminho a pé até Echo Creek e explicar a eles o que aconteceu.',
          'Foi isso que fiz. Quando cheguei já era de manhã e, assim que cheguei na rua da mãe de Grace, vi os corpos...',
          'Vários corpos no chão, miolos e sangue para todo lado.',
          'A ambulância já não estava lá.',
          'Achei que tivessem fujido na ambulância mas entre os corpos encontrei Grace e a mãe de Grace.',
          'Logo saquei a arma, fiquei completamente transtornado.',
          'Vi uma aglomeração de pessoas não muito distante, corri até eles enquadrando geral, mas...',
          'Quando olhei para os rostos percebi que tinha algo muito estranho acontecendo naquela cidade.',
          'Mas que porra é essa?! Zumbis!? Foi a única coisa que pensei quando eles começaram a se aproximar com a boca aberta, como se quisessem me morder.',
          'Sim, eles queriam me morder! Se não tivesse atirado eles teriam mordido.',
          'Mas atirar foi o meu segundo maior erro.',
          'Logo tinham vários zumbis a me cercar, eu corri para a rua principal e comecei a atirar em todos eles, um a um...',
          'Estava desesperado, aquilo tudo não parecia ser real, como se fossem zumbis...',
          'Eram zumbis, estavam todos doidos, sabe? Sem conciência de merda nenhuma.',
          'Chegou a noite e ainda estava lá deitando eles na bala, muitos não morriam com apenas uma bala na cabeça.',
          'Um deles chegou perigosamente perto de mim, tentei dar uma coronhada mas errei e ele abriu um corte profundo no meu braço, a dor era grande.',
          'Então fuji para dentro de uma casa, arranquei uma cortina da parede, a cortei na força e enrolei no braço para estancar o sangramento.',
          'Droga, será que essa merda pega pelo sangue? Estou apavorado.',
          'Só espero amanhecer vivo no próximo dia.',
        ]
      },
      {
        day: '02',
        content: [
          'Apesar de toda a dor que sinto e a ferida parecer um pouco infeccionada, não sinto que estou virando um deles, se é que isso possa ser sentido.',
          'Talvez perda de consciência é um sintoma? Não sei, poderia perder na mesma nesse inferno que estou vivendo.',
          'Não faço ideia do que está acontecendo. Ouvi rumores de que Darcy foi para Nova York para uma reunião sobre algo grande, será que tem a ver com essa merda toda?',
          'Não deve ser isso, senão teria levado o filho junto. Não sei se Coleman está vivo...',
          'Eu não sei o que fazer no momento, estou ilhado em Echo Creek e não faço ideia da dimensão do problema.',
          'Será que isso já chegou em Rosewood?',
          'Enquanto não tiver carro, acho que o melhor é juntar comida, nessa casa não tem nenhuma.',
          'Então saí para recolher comida, apesar da dor no braço, tinha que seguir em frente.',
          'Em uma casa encontrei um policial zumbificado, não sei de onde ele é, o nome dele é Isiah Gentry.',
          'Puxei a chave grifo que encontrei e o abati. Sangue para todo lado...',
          'Descanse em paz irmão.',
          'Não estão mais vivos Fox, não estão mais vivos... Tenho tentado acreditar nisso, não sei o que são mas não estão mais vivos.',
          'Ele tinha uma escopeta sem balas nas costas. Coloquei nas minhas costas na esperança de encontrar munição para ela.',
          'Fui no posto de gasolina e encontrei um carro com chaves, parece que alguém largou o carro ali, não teve tempo de fujir. Coloquei gasolina nele, agora com carro as coisas ficam mais fáceis.',
          'Também encontrei uma M1911 com balas, usarei quando encontrar um grupo grande deles.',
          'Meu primeiro impulso foi ganhar a estrada rumo a Rosewood, mas... E se lá estiver tudo tomado também?',
          'Talvez fosse mais estratégico ficar mais uns dias em Echo Creek onde a população é menor e eu já eliminei alguns deles.',
          'Além do mais, não estou contaminado aqui... Fui ferido mas não me tornei um deles. E se isso pega no ar? Se foi um sopro que passou por aqui e está a passar noutros lugares?',
          'Não sei, é melhor ficar por aqui mais um tempo.',
          'Nos próximos dias vou vasculhar as casas e juntar comida e equipamentos, tenho um mapa da cidade, vou fazer essa merda direito, marcar todos os lugares que passei e o que encontrei.',
          'Não tenho muita paciência para escrever mas acho importante ter isso escrito, se eu tiver alguma informação importante nos próximos dias, volto a escrever.',
          'Vou deixar apenas um "estou vivo" registrado nos dias que eu estiver sem saco para escrever.'
        ]
      },
      {
        day: '03',
        content: [
          'Chuva forte o dia todo. Vaculhei as casas debaixo de chuva, não quero perder tempo.',
          'Abati os zumbis que apareceram com a chave grifo.',
          'Encontrei um grupo grande de zumbis, então puxei a M1911 e comecei a abatê-los.',
          'A minha adrenalina estava a mil... Achei que fosse ser muito difícil puxar o gatilho e abater essas pessoas... essas coisas. Mas é isso, são coisas Fox, não são mais seres humanos.',
          'Não quero pensar muito, faço no automático. Acho que assim posso ser mais eficiente em sobreviver a eles.'
        ]
      },
      {
        day: '04',
        content: [
          'Estou vivo.',
        ]
      },
      {
        day: '05',
        content: [
          'Estou preocupado com luz e água, se essa infecção se espalhou não vai demorar para problemas de abastecimento aparecerem.',
          'Tenho que pensar num plano, coletar água da chuva e dos rios, instalar geradores mas não sei como funciona, espero encontrar algum livro que explique isso.',
          'Se não encontrar em Echo Creek, talvez tenha que sair da cidade para procurar essa informação.',
          'Sei que havia um curso de elétrica no Centro Comunitário de March Ridge, devo encontrar alguma coisa lá, uma viagem arriscada mas importante.',
          'Será também um bom termômetro para entender a dimensão do problema, se lá também estiver cheio de zumbis...',
          'Espero que Louisville esteja bem, minha família é de lá, sou nascido em Valley Station.',
          'Se minha família... Não quero pensar! Eu mato o filho da puta que iniciou tudo isso!'
        ]
      },
      {
        day: '06',
        content: [
          'Esse dia voltei a encontrar um grupo grande de zumbis e usei a arma de fogo, porém não tinha munição suficiente.',
          'Não consegui abater todos eles mas encontrei mais munição em outra casa. Não sei se posso dizer que é sorte estando nesse inferno, mas vamos dizer que foi um feliz acaso.',
          'Voltei lá e eliminei todos eles.',
          'Já perdi as contas de quantos abati nessa cidade, mas estou construindo um ambiente tranquilo para sobreviver, espero eu.',
          'Talvez Echo Creek seja um bom local para acolher outros sobreviventes, espero não ser o único.',
          'Também encontrei uma casa barricada, haviam dois corpos no chão e zumbis lá dentro, olhei por uma fresta na janela.',
          'A minha missão era entrar e vasculhar, então trabalhei para isso.',
          'Deixei os zumbis que estavam lá dentro bastante agitados para que eles quebrassem as barricadas de uma janela.',
          'Funcionou.',
          'Assim que eles pularam pela janela os abati com a pistola.',
          'Dentro encontrei outra M1911, medicamentos e uma máscara de gás, talves seja útil para evitar o cheiro dos corpos que é insuportável.',
          'Voltei para casa cansado. Amanhã tem mais.'
        ]
      },
      {
        day: '07',
        content: [
          'Passei o dia a varrer a cidade atrás de algo que explicasse como operar um gerador, mas não encontrei. Dorga!',
          'Vou iniciar amanhã um plano ousado, sair de Echo Creek e ir para March Ridge. No Centro Comunitário devo encontrar alguma informação.',
          'Que Deus esteja comigo.'
        ]
      },
      {
        day: '07',
        content: [
          'Passei o dia a varrer a cidade atrás de algo que explicasse como operar um gerador, mas não encontrei. Droga!',
          'Vou iniciar amanhã um plano ousado, sair de Echo Creek e ir para March Ridge. No Centro Comunitário devo encontrar alguma informação.',
          'Que Deus esteja comigo.'
        ]
      },
      {
        day: '08',
        content: [
          'Hoje comecei a preparar a minha viagem para Echo Creek e algo estranho aconteceu.',
          'Quando estava no posto com o carro abastecendo o tanque, um helicóptero apareceu e começou a sobrevoar sobre mim.',
          'Acenei para o helicóptero e mostrei meu distintivo, porém nada ocorreu.',
          'Fiquei com medo e comecei a caminhar dentre as árvores, para que ele perdesse um pouco a visão de mim.',
          'Era um helicóptero do exército, e ele tocou o foda-se para mim.',
          'A merda é grande e sinto que estou desamparado. Completamente desamparado.',
          'Troquei a bateria do carro que estava mal e peguei a estrada.',
          'Vejamos o que encontro em March Ridge.'
        ]
      },
      {
        day: '09',
        content: [
          'Nas estradas acidentes e zumbis por todos os lados, as vezes sozinhos, as vezes em grupos.',
          'Acabei por atropelar um servo que estava a correr de um grupo de zumbis, o animal correu para frente do carro e não consegui desviar.',
          'Por sorte sofri apenas arranhões e o carro não morreu.',
          'Peguei o animal e coloquei no porta-malas, poderia retirar a pele dele e aproveitar a carne.',
          'É o fim do mundo que estou vivenciando, com toda a certeza.',
          'Já na entrada de March Ridge me deparei com um grupo de zumbis.',
          'Lutei um tempo com eles, abati alguns, foi preciso para entrar na cidade com segurança.'
        ]
      },
      {
        day: '10',
        content: [
          'A cidade estava completamente tomada de zumbis, era quase impossível andar de carro sem atropelar um deles.',
          'Eu pensei em desistir da ideia mas não vim até aqui pra desistir agora.',
          'Vou entrar no Centro Comunitário, custe o que custar.',
          'Então consegui passar ligeiramente desapercebido, porém quando fui abrir a porta do Centro Comunitário, a porta estava fechada.',
          'Um zumbi se aproximou perigosamente e tive que enfrentá-lo, na primeira batida a barra de metal que estava a utilizar para abatê-los partiu.',
          'A porra da barra de metal partiu!',
          'Logo começaram a aparecer zumbis de todos os cantos e deu tudo errado.',
          'Passei o dia a tentar entrar no Centro Comunitário, eram muitos zumbis, tentei de tudo, até mesmo atirei neles, mas eram muitos.',
          'Porra! Não consegui entrar no prédio!',
          'Tive que recuar, voltei para a parte residencial de March Ridge onde tinham menos zumbis e consegui me esconder em uma casa para repor as energias.',
          'Amanhã tem mais.'
        ]
      },
      {
        day: '11',
        content: [
          'Um dia inteiro abatendo zumbis.',
          'Como eu odeio essas merdas ambulantes!',
          'Vou arrebentar todos eles!'
        ]
      },
      {
        day: '12',
        content: [
          'Acordei muito frustrado. Não consigo vasculhar o Centro Comunitário porque o prédio está cheio deles, dentro e fora.',
          'Mas também acordei decidido a limpar o máximo de zumbis que conseguir para entrar naquele prédio.',
          'Enquanto lutava um deles dilacerou minha mão esquerda, a dor foi insuportável. Eu desinfectei a ferida, passei uma bandagem e continuei.',
          'Mesmo com dor eu continuei, mais agressivo do que antes, mais letal do que antes!',
          'Eu só pensava em limpar todos eles, minha adrenalina estava a mil!',
          'Mas no final do dia, não consegui grandes avanços. Eles são muitos. Muitos.',
          'Respirei fundo e decidi recuar.',
          'Vou para Rosewood, tem a livraria da cidade, talvez encontre algo lá.'
        ]
      },
      {
        day: '13',
        content: [
          'Rosewood é o meu pior pesadelo. Meus amigos, conhecidos, todos viraram essas coisas.',
          'Será que isso chegou mesmo em Louisville... Não posso acreditar nisso.',
          'Passei o dia a abater conhecidos para entrar na cidade...',
          'Não quero mais escrever.'
        ]
      },
      {
        day: '14',
        content: [
          'É... uma mistura de ódio com desesperança... É a primeira vez que sinto isso, desesperança...',
          'Não quero mais pensar nisso. Não posso. Tenho um longo e triste dia de trabalho hoje.'
        ]
      },
      {
        day: '15',
        content: [
          '[NÃO HÁ MAIS REGISTROS NESTE DIÁRIO]'
        ],
        isDead: true
      }
    ],
    'diario-enfermeira-beth': [
      {
        day: '01',
        content: [
          'Eu não sei o que está acontecendo e não sei até quando ficarei viva, mas vou anotar todos os dias nesse diário, para que eu possa ajudar outras pessoas, se ainda tiver mais alguém vivo além de mim.',
          'Logo cedo cheguei a Echo Creek, fiquei na casa da irmã de Greta, como de costume.',
          'Uma vez por mês venho a Echo Creek para verificar a saúde da senhora Norma, uma senhora acamada.',
          'Geralmente faço a visita no dia seguinte, bem cedinho.',
          'Jantei com Greta e fui dormir.',
          'A sensação é de que dormi, sonhei com um pesadelo e quando acordei não saí do sonho. Queria acreditar que tudo aquilo não era real...',
          'Quando levantei Greta não estava em casa. Somos amigas, sei que ela vez ou outra encontra-se com Bob a noite... E Bob é um homem casado.',
          'Não faço juízo de valor mas é uma canoa furada.',
          '(não sei como consigo encontrar ânimo para escrever isso depois de hoje)',
          'Tomei o café da manhã e quando saí de casa rumo a casa de Greta... Foi quando avistei o primeiro deles.',
          'Ele olhou para mim, a boca a escorrer sangue, começou a caminhar na minha direção.',
          'Não era uma pessoa normal.',
          'Assustada eu voltei para dentro de casa e tranquei portas e janelas.',
          'Ele começou a bater na janela...',
          'Greta disse-me ontem que Bob deixou uma arma na mesa de cabeceira semana passada.',
          'Não quis entrar em detalhes porque até onde sei Bob não tem porte de armas.',
          'Ela disse que ele chegou com a arma presa ao cinto, guardou ela na mesa de cabeceira e, sem dizer uma palavra, começou a despir ela e fazer amor.',
          'Eu achei estranho quando ela contou que ele guardou a arma na gaveta. Parecia que ele queria mesmo deixar uma arma para ela por algum motivo.',
          'Peguei a arma. Nunca tinha feito um disparo na minha vida.',
          'Olhei para aquela pessoa por alguns segundos a bater na janela. Ela não parece-me estar viva. Mas como ela não está viva?',
          'Está louca se estiver viva, se não estiver tem que estar a ser controlada por algo... Por um parasita?',
          'Não, é impossível um parasita, deve ser uma desordem neurológica.',
          'Não posso atirar nessa pessoa, ela precisa ser tratada, era um homem na casa dos 30 anos, penso eu.',
          'Ele quebrou a janela e pulou...',
          'Quando olhei as suas costas... Um grande buraco...',
          'Essa pessoa não está viva! Pensei aterrorizada.',
          'Estava apavorada, não pelo buraco que ele tinha nas costas porque sou enfermeira, isso não me assusta, mas pela constatação.',
          'Ele não está vivo.',
          'Assim que ele levantou acertei um tiro na cabeça, que não foi suficiente.',
          'Acertei mais um tiro que não foi na cabeça, ele continuou a caminhar na minha direção.',
          'Respirei fundo e acertei o terceiro na cabeça, ele caiu e parou de se mexer.',
          'A única coisa que pensei é que deveria fujir daquela cidade o quando antes, se isso aconteceu com uma pessoa pode acontecer comigo.',
          'Mas estava preocupada com Greta e se possível levaria Norma comigo.',
          'Então saí de casa... E me deparei com vários deles a cercar a casa, olhos vazios com vontade de devorar algo...',
          'Comecei a atirar e fujir.',
          'Pensei, preciso ir para o posto de gasolina, talvez encontre um carro lá e consiga procurar por Greta e buscar Norma, se ainda estiverem vivas...',
          'Eu fiquei muito assustada, eram muitos atrás de mim quando finalmente cheguei no posto e... Não tinha gasolina.',
          'Tinha um táxi mas trancado, procurei pelas chaves no posto mas não encontrei.',
          'Eu não quero prolongar a história mas foi muito difícil sobreviver a eles, eu sinceramente não sei como sobrevivi a um dia nesse inferno.',
          'Não encontrei Greta, a casa de Norma estava em cinzas, só encontrei o esqueleto dela... e um caderno com anotações que por sorte não queimou no incêndio. Lembro que Norma estava sempre a fazer anotações mas nunca perguntei do que se tratava. Peguei de recordação.',
          'Contudo, encontrei um carro com chaves perto da casa de Norma. Consegui retirar gasolina do táxi e colocar no outro carro.',
          'Tenho um carro mas ainda não sei o que fazer. Greta estará viva? Preciso pensar, preciso sair dessa cidade.'
        ]
      },
      {
        day: '02',
        content: [
          'Continua na próxima live...',
        ]
      },
    ],
    'diario-eletricista-alonzo': [
      {
        day: '01',
        content: [
          'Eu achei estranho quando um oficial do exército bateu na minha porta.',
          'Ele disse: "Precisamos que você vá imediatamente para Echo Creek até essa residência - e me deu um endereço."',
          'Depois disse: "Fale com este homem, ele dará as instruções a você, estamos reunindo um grupo de eletricistas, no momento oportuno saberá o motivo."',
          'No final colocou a mão no meu ombro e disse: "Contamos com você".',
          'Fui responder que vendi meu carro recentemente mas ele logo emendou: "Sabemos que está sem carro, tem um táxi esperando por você lá fora. Apenas pegue o seu material é vá."',
          'Eu entrei no táxi atordoado. O que está acontecendo? Porque tenho que encontrar um homem do exército para uma missão secreta em Echo Creek? Aquele lugar nem delegacia tem!',
          'A viagem era longa. Eu cochilei.',
          'Acordei com uma buzina. Já era noite.',
          'Perguntei o que estava a ocorrer para o taxista.',
          'O homem falou um inglês enrolado, parecido quando cheguei aqui: "Uma pessoa parada no meio da estrada, carajo!"',
          'Sim, quando olhei, havia uma mulher com camisola parada de costas para o carro no meio da rua. Parecia uma assombração sob a luz dos faróis do carro.',
          'O homem saiu irritado do carro e deu duas cutucadas no ombro da mulher.',
          'O que se seguiu foi um horror...',
          'A mulher virou e simplesmente o mordeu.',
          'Logo depois apareceram mais dois da escuridão e agarraram o taxista que caiu no chão, o homem urrava de dor e desespero enquanto era devorado.',
          'Eu fiquei parado, atônito, a assitir aquilo.',
          'Apenas acordei do transe quando ouvi batidas e unhas nos vidros do carro. Uma mulher e um homem, rostos pálidos, olhos vazios, tentavam quebrar o vidro do carro.',
          'Pulei para o banco de motorista e liguei o motor.',
          'Assim que o motor começou a roncar, levantou o taxista bem na frente do carro, ensanguentado, com os olhos vidrados.',
          'Com todos aqueles ferimentos, como ele está vivo? Ele não está vivo...',
          'Eu apenas arranquei com o carro e atropelei o taxista e os outros três que o agarraram.',
          'O som dos ossos partindo foi horrível. Segui estrada sem olhar para trás.',
          'Eu estava em choque, completamente em choque. O que vi foi algo sobrenatural.',
          'Cheguei em Echo Creek de manhã e estava um caos.',
          'Haviam pessoas nas ruas e nos jardins das casas no mesmo estado. Alguns perceberam a minha presença, por sorte tenho o táxi.', 
          'Estacionei o táxi na frente da residência que me instruíram.',
          'Bati na porta da casa. Nada.',
          'Resolvi pular a janela que estava aberta. Eu estava completamente fora de mim.',
          'Assim que pulei a janela ouvi gemidos.',
          'Havia um homem lá dentro... Ele olhou para mim, seu rosto pálido, e começou a avançar na minha direção para me morder.',
          'Tive um embate com ele, consegui empurrá-lo, ele caiu sobre a mesa de centro da sala e a destruiu.',
          'Um pedaço do pé da mesa caiu rolou dos meus pés... Agarrei o pedaço de madeira.',
          'Ele levantou e voltou a caminhar na minha direção. Eu não queria matá-lo, mas... Será que ele já está morto?',
          'Vou acertar a cabeça dele e ver se consigo fazê-lo perder a consciência.',
          'Acertei a cabeça dele com uma com força controlada, porém ele logo se recuperou do golpe e abriu a boca para me morder.',
          'Não teve jeito, desferi mais golpes com força, até que ouvi o crânio partir...',
          'Ele caiu, inerte.',
          'Fiquei duas horas sentado, em choque, com aquele homem no chão e a poça de sangue que se formou em volta da cabeça dele.',
          'Infectados por algo? São... zumbis?',
          'Peguei a carteira dele e olhei a identidade, não é o homem que vim procurar...',
          'Temos pontas soltas, fios desencampados. Não faço ideia do que está acontecendo mas certamente o exército sabe.',
          'Pronto, está registrado o que aconteceu comigo hoje, vou fazer esse diário para que sirva de prova de que o exército tem relação com isso.'
        ]
      },
      {
        day: '02',
        content: [
          'Aparentemente a cidade toda está tomada por infectados.',
          'E são muitos.',
          'Enfrentei alguns deles... Foi terrível, não quero entrar em detalhes, estou emocionamente muito mal.',
          'Fui até o posto abastecer o tanque para ir embora mas... Não sei se deveria sair de Echo Creek de imediato. E se isso estiver a se espalhar por todos os lugares?',
          'Acho que preciso me preparar. Tempos difíceis virão com toda certeza.',
          'Vou usar o que me fez chegar até aqui, a cabeça e alguma coragem.',
          'Vou pensar, estudar, aprender tudo que puder aprender. E buscar minha filha em Louisville, preciso proteger minha filha.',
          'Louisville é uma cidade grande, alguma proteção contra isso deve ter sido levantada lá.',
          'No segundo andar do posto tem uma casa, vou ficar por aqui por enquanto e pensar num plano.',
          'Não será fácil. Espero acordar vivo amanhã.'
        ]
      },
      {
        day: '03',
        content: [
          'Ainda ouço o som dos ossos a quebrar na minha cabeça...',
          'Ouvi no rádio do posto rumores estranhos. Dizem que é uma infecção mesmo, estão a dizer para ficar longe das pessoas infectadas.',
          'Mas, é muito pior que isso... As pessoas infectadas querem nos matar.',
          'Acho que as informações ainda estão truncadas.'
        ]
      },
      {
        day: '04',
        content: [
          'Tenho enfrentado eles, mas tem sido difícil pra mim.',
          'Reuni comida, materiais e livros hoje.',
          'Encontrei também um revolver e uma pistola... Acho que vou ter que aprender a usar isso.',
          'Continuo no posto.',
          'No rádio mais relatos de acontecimentos estranhos. Como ninguém percebeu que Echo Creek está um caos?',
          'Isso é algo muito sério e não quero passar a minha vida fujindo deles.',
          'Os ataques na cabeça são mais efetivos mas... é simplesmente terrível fazer isso. Eu não vou aguentar isso por muito tempo.',
          'O melhor é ir para um lugar afastado, um lugar que eles não possam chegar, ou que pelo menos cheguem poucos.',
          'Eu sei me virar, eu vou conseguir. Preciso ter um refúgio e buscar a minha filha.'
        ]
      },
      {
        day: '05',
        content: [
          'Fiz manutenção no táxi, troquei os pneus.',
          'Trabalhei numa oficina um tempo atrás, sei alguma coisa.',
          'O motor não parece estar muito bom, mas não sei consertar, vou estudar para aprender isso.',
          'Preciso aprender tudo o que puder aprender para sobreviver nesse inferno.',
        ]
      }
    ]
  };

  getDiaryEntries(route: string) {
    return this.diaries[route] || [];
  }
}
