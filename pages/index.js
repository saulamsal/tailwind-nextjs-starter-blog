import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="">
        <div className="pb-8 space-y-2 md:space-y-5">
          <h1
            className="mt-4 mb-4 text-3xl italic font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 "
            style={{
              // 'background': '#86abd5',
              padding: '0 10px',
              borderRadius: '20px 20px 20px 0px',
              display: 'inline-block',
              // color: '#000'
            }}
          >
            Hey there!
          </h1>
          <p
            className="max-w-3xl p-3 text-lg leading-7 text-gray-500 rounded-lg dark:text-gray-400 "
            style={
              {
                // boxShadow: '0 2px 17px -2px hsl(0deg 0% 66% / 21%)'
              }
            }
          >
            <span
              className="rounded-full  inline-flex items-center justify-center pl-0.5  pr-2  ml-9.5 relative top-1 gradient-bg mr-1"
              style={{
                color: '#000',
                height: '22px',
              }}
            >
              {' '}
              <img src="static/images/me.png" className="w-5 h-5 rounded-full mr-0.5 " />{' '}
              <span className="">Saurabh</span>{' '}
            </span>
            is an{' '}
            <a
              className="text-black dark:text-gray-300 external-link "
              href="https://www.producthunt.com/products/howtoreplyto-com#howtoreplyto-com"
            >
              award winning <img src="static/svg/top-right.svg" className="inline w-4 h-4 "></img>
            </a>{' '}
            founder with an extreme passion for crafting a delightful user experience.
            <div className="mt-4">
              He loves creating software that adds value to people, customers or himself. He likes
              to design products that just <span className="italic">work</span>. Although a
              self-proclaimed T-shaped engineer, his passion truly lies in frontend engineering, web
              performance, optimization, and scaling products.
            </div>
            <div className="mt-4">
              As a seasoned Software Engineer, he has contributed significantly to numerous
              corporations like Fly Emirates, Stock Yard Bank (NYSE: SYB), Midwestern Insurance,
              Wirecrafters, and several others in various industries.
              <div className="mt-4">
                When he's not elbow-deep in code, you'll find Saurabh time-traveling through
                history, space-hopping across the cosmos, or fortune-telling with futurology. Who
                said coders can't have a wild side?
              </div>
            </div>
          </p>

          <div className="mb-6">
            <div className="mb-2 text-xl text-gray-500 uppercase font-extralight dark:text-gray-400">
              {' '}
              Interests{' '}
            </div>
            <div className="flex flex-wrap">
              <div>
                {' '}
                <div className="inline-flex justify-center items-center m-1 font-medium  py-2.5 px-3 bg-white rounded-full text-blue-700 bg-blue-50 dark:bg-stone-900  ">
                  <div className="flex-initial max-w-full text-xs font-bold leading-none">
                    Frontend Engineering
                  </div>
                </div>
              </div>

              <div>
                {' '}
                <div className="inline-flex justify-center items-center m-1 font-medium py-2.5  px-3 bg-white rounded-full text-red-700 bg-red-50 dark:bg-stone-900">
                  <div className="flex-initial max-w-full text-xs font-bold leading-none">
                    Distributed Systems
                  </div>
                </div>
              </div>

              <div>
                {' '}
                <div className="inline-flex justify-center items-center m-1 font-medium py-2.5 px-3 bg-white rounded-full text-green-700 bg-green-50 dark:bg-stone-900">
                  <div className="flex-initial max-w-full text-xs font-bold leading-none">
                    Backend
                  </div>
                </div>
              </div>

              <div>
                {' '}
                <div className="inline-flex justify-center items-center m-1 font-medium py-2.5  px-3 bg-white rounded-full text-purple-700 bg-purple-50 dark:bg-stone-900">
                  <div className="flex-initial max-w-full text-xs font-bold leading-none">
                    Product Development
                  </div>
                </div>
              </div>

              <div>
                {' '}
                <div className="inline-flex justify-center items-center m-1 font-medium py-2.5  px-3 bg-white rounded-full text-cyan-700 bg-cyan-50 dark:bg-stone-900">
                  <div className="flex-initial max-w-full text-xs font-bold leading-none">
                    Design Systems
                  </div>
                </div>
              </div>

              <div>
                {' '}
                <div className="inline-flex justify-center items-center m-1 font-medium py-2.5  px-3 bg-white rounded-full text-orange-700 bg-orange-50 dark:bg-stone-900">
                  <div className="flex-initial max-w-full text-xs font-bold leading-none">
                    UI/UX
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="flex mt-4 text-lg font-bold" href="mailto:saulamsal@yahoo.com">
            Say hiii👋 to him. ✉️{' '}
          </a>
        </div>

        <div className="p-2 rounded-lg gradient-bg" style={{}}>
          <div
            data-w-id="4b9e48d4-bf21-c4ef-bfb8-e1f828eb7689"
            className="w-full mr-0 text-zinc-800"
            style={{ willChange: 'opacity', opacity: '0.90025' }}
          >
            <div
              data-w-id="d9abda31-191a-73bd-2973-efe4aca48a60"
              className="opacity-100"
              style={{ opacity: 1, willChange: 'opacity', maxWidth: 720 }}
            >
              <div className="w-full">
                <div
                  className="mx-2 text-sm font-semibold leading-4 text-black uppercase"
                  style={{ letterSpacing: 3 }}
                >
                  Qlur.com
                </div>
                <h2
                  className="mx-2 mt-3 mb-8 text-xl font-bold tracking-tight text-black"
                  style={{ lineHeight: '110%' }}
                >
                  Currently building QLUR
                </h2>
              </div>
              <div className="flex mb-4">
                <div className="flex w-px ml-4 mr-4 bg-gray-400" style={{}} />
                <div className="">
                  <p className="max-w-screen-sm font-serif text-base font-normal leading-8 text-black opacity-700">
                    We're building a platform that provides curated football news, headlines,
                    tweets, videos and live scores from world football customized to an individual's
                    preferences.
                    <br /> <br />
                    Available on Web, iOS and Android.
                    <a
                      href="https://qlur.com"
                      target="_blank"
                      className=" font-medium bg-transparent cursor-pointer hover:rounded hover:bg-gray-200 hover:text-slate-900 hover:opacity-100 hover:bg-opacity-[0.1] sm:font-semibold sm:text-black hover,sm:text-slate-900"
                      style={{
                        transition: 'color 200ms ease 0s, background-color 200ms ease 0s',
                        textDecoration: 'underline',
                      }}
                      rel="noreferrer"
                    >
                      <br />
                      Learn more here
                      {/* <img src="static/svg/top-right.svg" class="w-4 h-4 inline "></img> */}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-10 mb-2 text-xl text-gray-500 uppercase font-extra-light dark:text-gray-400">
            {' '}
            Other products I built:
          </div>

          <div
            className="mt-4 center relative inline-block select-none whitespace-nowrap rounded-full px-3.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
            style={{
              background: '#1ba3a0',
            }}
          >
            <div className="absolute w-5 h-5 top-2/4 left-1 -translate-y-2/4">
              <img
                alt="HowToReplyTo.com"
                src="https://howtoreplyto.com/favicon.ico"
                className="relative inline-block object-cover object-center w-5 h-5 translate-x-px translate-y-px rounded-full"
              />
            </div>
            <div className="mt-px ml-4">
              <p className="block font-sans text-sm antialiased font-medium leading-none text-white capitalize">
                HowToReplyTo.com
              </p>
            </div>
          </div>

          <div
            className="ml-3 mt-4 center relative inline-block select-none whitespace-nowrap rounded-full px-3.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
            style={{
              background: '#1405ed',
            }}
          >
            <div className="absolute w-5 h-5 top-2/4 left-1 -translate-y-2/4">
              <img
                alt="replybrain.com"
                src="https://replybrain.com/replybrain/favicon.png"
                className="relative inline-block object-cover object-center w-5 h-5 translate-x-px translate-y-px rounded-full"
              />
            </div>
            <div className="mt-px ml-4">
              <p className="block font-sans text-sm antialiased font-medium leading-none text-white capitalize">
                ReplyBrain.com
              </p>
            </div>
          </div>

          <div
            className="ml-3 mt-4 center relative inline-block select-none whitespace-nowrap rounded-full px-3.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
            style={{
              background: '#bd3b30',
            }}
          >
            <div className="absolute w-5 h-5 top-2/4 left-1 -translate-y-2/4">
              <img
                alt="replybrain.com"
                src="https://logotip.online/static/assets/img/favicon-32x32.png"
                className="relative inline-block object-cover object-center w-5 h-5 translate-x-px translate-y-px rounded-full"
              />
            </div>
            <div className="mt-px ml-4">
              <p className="block font-sans text-sm antialiased font-medium leading-none text-white capitalize">
                LogoTip.Online
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-2 text-xl text-gray-500 uppercase font-extra-light dark:text-gray-400">
          {' '}
          Blog (in progress){' '}
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
