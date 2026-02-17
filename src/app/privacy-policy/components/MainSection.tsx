import { Link } from '~/shared/components/atoms/ui/link'

export default function MainSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2 mt-6">
          1. Introdução
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          A LUMIA, inscrita no CNPJ sob o nº 64.823.588/0001-66, valoriza a
          privacidade e a proteção dos dados pessoais de seus clientes,
          parceiros e visitantes. Esta Política de Privacidade descreve como
          coletamos, usamos, armazenamos e compartilhamos suas informações
          quando você acessa nosso site ou utiliza nossos serviços, em
          conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados
          Pessoais – LGPD).
        </p>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-2 mt-6">
          2. Dados que coletamos
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Podemos coletar as seguintes categorias de dados pessoais:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="text-muted-foreground leading-relaxed mb-2">
            <strong>Dados de identificação:</strong> nome, e-mail, telefone,
            empresa, cargo.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            <strong>Dados de navegação:</strong> endereço IP, tipo de
            dispositivo, navegador, páginas acessadas, data e hora da visita.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            <strong>Dados de interação:</strong> formulários preenchidos,
            downloads de materiais, cliques em links.
          </li>
        </ul>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-2 mt-6">
          3. Uso de cookies e tecnologias similares
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Utilizamos cookies e tecnologias semelhantes para melhorar sua
          experiência, analisar o tráfego do site e personalizar conteúdo. Os
          cookies podem ser classificados como:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="text-muted-foreground leading-relaxed mb-2">
            <strong>Necessários:</strong> essenciais para o funcionamento do
            site (ex.: segurança, preferências de idioma).
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            <strong>Analíticos:</strong> coletam informações anônimas sobre como
            os visitantes interagem com o site (ex.: Google Analytics).
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            <strong>Marketing:</strong> rastreiam visitas para exibir anúncios
            relevantes.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Ao acessar nosso site, você poderá optar por aceitar ou rejeitar os
          cookies não essenciais por meio do nosso banner de consentimento. Você
          também pode gerenciar suas preferências diretamente nas configurações
          do seu navegador.
        </p>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-2 mt-6">
          4. Google Analytics
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Utilizamos o Google Analytics 4, um serviço de análise de dados
          fornecido pelo Google LLC, para entender como os usuários interagem
          com nosso site. O Google Analytics coleta informações como:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="text-muted-foreground leading-relaxed mb-2">
            Endereço IP (anonymized, com a omissão do último octeto para
            conformidade com a LGPD);
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Páginas visitadas e tempo de permanência;
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Origem do tráfego (ex.: mecanismos de busca, redes sociais);
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Tipo de dispositivo, navegador e sistema operacional.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Esses dados são usados para gerar relatórios estatísticos e melhorar
          continuamente nosso site. O Google pode armazenar cookies em seu
          dispositivo para essa finalidade. Para mais informações sobre como o
          Google trata dados, consulte a{' '}
          <Link
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Política de Privacidade do Google
          </Link>
          .
        </p>
        <p className="text-muted-foreground leading-relaxed mb-2">
          O processamento dos dados ocorre somente após seu consentimento
          explícito, que pode ser concedido ou revogado a qualquer momento
          através do nosso banner de cookies.
        </p>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-2 mt-6">
          5. Base legal para o tratamento (LGPD)
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Tratamos seus dados pessoais com base nas seguintes hipóteses legais
          previstas na LGPD:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="text-muted-foreground leading-relaxed mb-2">
            <strong>Mediante consentimento:</strong> para cookies analíticos e
            de marketing, envio de comunicações de marketing e outras
            finalidades que exigem autorização prévia.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            <strong>Para execução de contrato:</strong> quando necessário para
            prestar nossos serviços ou atender a solicitações.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            <strong>Para cumprimento de obrigação legal ou regulatória:</strong>{' '}
            por exemplo, retenção de informações fiscais.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            <strong>Para legítimo interesse:</strong> em situações como melhoria
            da segurança do site, prevenção de fraudes e análises internas,
            desde que não prevaleçam seus direitos e liberdades fundamentais.
          </li>
        </ul>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-2 mt-6">
          6. Compartilhamento de dados
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Não compartilhamos seus dados pessoais com terceiros, exceto:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="text-muted-foreground leading-relaxed mb-2">
            Com provedores de serviços essenciais para o funcionamento do site
            (ex.: hospedagem, ferramentas de análise) que atuam como operadores,
            sob nossas instruções e com obrigações contratuais de proteção de
            dados.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Quando exigido por lei, ordem judicial ou autoridade reguladora.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Em caso de fusão, aquisição ou reestruturação societária, mediante
            comunicação prévia.
          </li>
        </ul>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-2 mt-6">
          7. Seus direitos como titular de dados
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          A LGPD garante a você diversos direitos. Você pode solicitar a
          qualquer momento:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="text-muted-foreground leading-relaxed mb-2">
            Confirmação da existência de tratamento de seus dados.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Acesso aos seus dados pessoais.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Correção de dados incompletos, inexatos ou desatualizados.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Anonimização, bloqueio ou eliminação de dados desnecessários ou
            tratados em desconformidade com a lei.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Portabilidade dos dados a outro fornecedor de serviço ou produto,
            mediante requisição expressa.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Eliminação dos dados tratados com seu consentimento.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Informação sobre as entidades públicas e privadas com as quais
            compartilhamos seus dados.
          </li>
          <li className="text-muted-foreground leading-relaxed mb-2">
            Revogação do consentimento a qualquer tempo, sem prejuízo da
            legalidade do tratamento anterior.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Para exercer seus direitos, entre em contato conosco através do e-mail{' '}
          <Link
            href="mailto:contato@lumia.eng.br"
            className="text-primary underline"
          >
            contato@lumia.eng.br
          </Link>
          .
        </p>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-2 mt-6">
          8. Armazenamento e segurança
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Adotamos medidas técnicas e organizacionais adequadas para proteger
          seus dados contra acesso não autorizado, destruição, perda ou
          alteração. Seus dados são armazenados em servidores seguros,
          localizados preferencialmente no Brasil, e mantidos pelo tempo
          necessário para cumprir as finalidades descritas nesta política, salvo
          se houver exigência legal de prazo maior.
        </p>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-2 mt-6">
          9. Alterações nesta política
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Reservamo-nos o direito de modificar esta Política de Privacidade a
          qualquer momento, em conformidade com a legislação aplicável. As
          alterações entrarão em vigor após a publicação em nosso site, e
          recomendamos que você revise periodicamente esta página.
        </p>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-2 mt-6">
          10. Contato
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o
          tratamento de seus dados, entre em contato com nosso Encarregado de
          Proteção de Dados (DPO) pelo e-mail{' '}
          <Link
            href="mailto:contato@lumia.eng.br"
            className="text-primary underline"
          >
            contato@lumia.eng.br
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
