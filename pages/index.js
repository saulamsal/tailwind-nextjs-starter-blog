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
            className="mt-12 mb-4 text-3xl italic font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 "
            style={{
              // 'background': '#86abd5',
              padding: '8px 30px',
              borderRadius: '50px 50px 50px 0px',
              display: 'inline-block',
              // color: '#000'
            }}
          >
            Hey there!
            <img
              src="https://uploads-ssl.webflow.com/634d560fb778817748fac023/634fa7e89c7b598a8541732f_footer-shape.svg"
              loading="lazy"
              alt=""
              className="inline-flex w-8 ml-2 star animate-spin"
              style={{
                'animation-duration': '6s',
              }}
            />
          </h1>
          <p
            className="max-w-3xl p-3 text-lg leading-7 text-gray-800 rounded-lg dark:text-gray-400 "
            style={
              {
                // boxShadow: '0 2px 17px -2px hsl(0deg 0% 66% / 21%)'
              }
            }
          >
            <span className="text-3xl">
              <span
                className="rounded-full  inline-flex items-center justify-center pl-1  pr-2  ml-9.5 relative top-1  mr-1 gradient-bg"
                style={{
                  color: '#000',
                  height: '32px',
                  // border: 'dotted 1px',
                }}
              >
                {' '}
                <img src="static/images/me.png" className="w-7 h-7 rounded-full mr-0.5  " />{' '}
                <span
                  className=""
                  style={{
                    'letter-spacing': '-2px',
                  }}
                >
                  Saurabh
                </span>{' '}
              </span>
              is an{' '}
              <a
                className="italic external-link"
                href="https://www.producthunt.com/products/howtoreplyto-com#howtoreplyto-com"
              >
                award winning{' '}
                <img src="static/svg/top-right.svg" className="inline w-5 h-5 -ml-2 "></img>
              </a>{' '}
              founder with an extreme passion for crafting a delightful user experience.
            </span>

            <div className="mt-4 font-serif">
              He loves creating software that adds value to people, customers or himself. He likes
              to{' '}
              <span className="mark_pen">
                design products that just <span className="italic">work.</span>{' '}
              </span>
              A self-proclaimed T-shaped engineer, his passion truly lies in frontend engineering.
              He is particularly enthusiastic about web performance, optimization, and building
              products at scale.
            </div>
            <div className="mt-4 font-serif ">
              As a seasoned Software Engineer, he has contributed significantly to numerous
              corporations and brands like Fly Emirates, Stock Yard Bank (NYSE: SYB), Midwestern
              Insurance, Jack Harlow Foundation, Wirecrafters, and several others in various
              industries.
            </div>

            <div className="mt-4 font-serif">
              When he's not elbow-deep in code, you'll find Saurabh time-traveling through history,
              space-hopping across the cosmos, or fortune-telling with futurology. Who said coders
              can't have a wild side?
            </div>

            <div className="mt-8 mb-6">
              <div className="mb-2 text-xl text-gray-700 uppercase font-extralight dark:text-gray-400">
                {' '}
                His Interests
              </div>
              <div className="flex flex-wrap">
                <div>
                  {' '}
                  <div className="inline-flex justify-center items-center m-1 font-medium  py-2 px-2.5 bg-white rounded-full text-blue-700 bg-blue-50 dark:bg-stone-900  ">
                    <div className="flex-initial max-w-full text-sm font-bold leading-none">
                      Frontend Engineering
                    </div>
                  </div>
                </div>

                <div>
                  {' '}
                  <div className="inline-flex justify-center items-center m-1 font-medium py-2.5  px-3 bg-white rounded-full text-red-700 bg-red-50 dark:bg-stone-900">
                    <div className="flex-initial max-w-full text-sm font-bold leading-none">
                      Distributed Systems
                    </div>
                  </div>
                </div>

                <div>
                  {' '}
                  <div className="inline-flex justify-center items-center m-1 font-medium py-2 px-2.5 bg-white rounded-full text-pink-700 bg-pink-50 dark:bg-pink-900">
                    <div className="flex-initial max-w-full text-sm font-bold leading-none">
                      Backend
                    </div>
                  </div>
                </div>

                <div>
                  {' '}
                  <div className="inline-flex justify-center items-center m-1 font-medium py-2.5  px-3 bg-white rounded-full text-purple-700 bg-purple-50 dark:bg-stone-900">
                    <div className="flex-initial max-w-full text-sm font-bold leading-none">
                      Product Development
                    </div>
                  </div>
                </div>

                <div>
                  {' '}
                  <div className="inline-flex justify-center items-center m-1 font-medium py-2 px-2.5 bg-white rounded-full text-green-700 bg-green-50 dark:bg-stone-900">
                    <div className="flex-initial max-w-full text-sm font-bold leading-none">
                      Web Performance
                    </div>
                  </div>
                </div>

                <div>
                  {' '}
                  <div className="inline-flex justify-center items-center m-1 font-medium py-2 px-2.5 bg-white rounded-full text-sky-700 bg-sky-50 dark:bg-sky-900">
                    <div className="flex-initial max-w-full text-sm font-bold leading-none">
                      PWAs
                    </div>
                  </div>
                </div>

                <div>
                  {' '}
                  <div className="inline-flex justify-center items-center m-1 font-medium py-2.5  px-3 bg-white rounded-full text-cyan-700 bg-cyan-50 dark:bg-stone-900">
                    <div className="flex-initial max-w-full text-sm font-bold leading-none">
                      Design Systems
                    </div>
                  </div>
                </div>

                <div>
                  {' '}
                  <div className="inline-flex justify-center items-center m-1 font-medium py-2.5  px-3 bg-white rounded-full text-lime-700 bg-lime-50 dark:bg-lime-900">
                    <div className="flex-initial max-w-full text-sm font-bold leading-none">
                      Functional Programming
                    </div>
                  </div>
                </div>

                <div>
                  {' '}
                  <div className="inline-flex justify-center items-center m-1 font-medium py-2.5  px-3 bg-white rounded-full text-orange-700 bg-orange-50 dark:bg-stone-900">
                    <div className="flex-initial max-w-full text-sm font-bold leading-none">
                      UI/UX
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 font-serif">
              Roll a dice, and you may spot him making duck faces at monuments in DC, cheering on
              Austin FC in cowboy boots, or getting lost in a bourbon barrel in Louisville!
            </div>
          </p>

          <a
            className="flex mt-4 ml-3.5 text-3xl font-bold font-serif"
            href="mailto:saulamsal@yahoo.com"
            style={
              {
                // 'text-shadow': '0  13.36px 8.896px #c4b59d, 0 -2px 1px #fff'
              }
            }
          >
            Say hi to him. 👋{' '}
          </a>
        </div>

        <div className="order-1 px-0 px-2 pt-4 overflow-hidden leading-6 tracking-tight text-center rounded-md text-zinc-900 my-14 stripe-bg">
          <img src="https://assets.qlur.com//favicon/android-chrome-512x512.png" className="w-20" />

          <div
            className="max-w-md pl-2 mt-2 text-2xl tracking-tight text-left rounded-md mb-14"
            style={{
              color: '#0360fe',
            }}
          >
            Currently he is building QLUR.com, a platform that provides curated football news,
            headlines, tweets, videos and live scores from world football customized to an
            individual's preferences.
            <div className="mt-4 italic text-md">Built for Web, iOS and Android.</div>
          </div>

          <div className="w-full mx-auto leading-6 text-zinc-900">
            <h2 className="font-serif text-3xl font-semibold tracking-normal ">QLUR</h2>
            <p className="mt-2 font-serif text-base font-normal tracking-normal opacity-90">
              Football news, tweets, videos<span className="italic"> - all in one place</span>.
            </p>

            {/* <ul className="flex justify-center w-full mt-2">
              <li className="mr-3">
                {' '}
                <a
                  href="https://apps.apple.com/app/id1641830762"
                  style={{ margin: 0 }}
                  target="_blank"
                  rel="noreferrer noopener"
                  draggable="false"
                  className=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                  >
                    <g id="ic_app_store" transform="translate(-703 -5)">
                      <circle
                        id="Ellipse_312"
                        cx={25}
                        cy={25}
                        r={25}
                        fill="#fff"
                        transform="translate(703 5)"
                      />
                      <g id="XMLID_4_" transform="translate(717.883 15.393)">
                        <g id="XMLID_5_">
                          <path
                            id="XMLID_7_"
                            fill="var(--text-primary)"
                            d="M26.873 21.171a5.591 5.591 0 0 1 2.7-4.721 5.8 5.8 0 0 0-4.557-2.457c-1.919-.2-3.781 1.138-4.752 1.138-.994 0-2.5-1.126-4.123-1.092a6.064 6.064 0 0 0-5.106 3.106c-2.2 3.811-.56 9.408 1.553 12.491 1.062 1.513 2.3 3.2 3.918 3.128 1.588-.068 2.182-1 4.089-1s2.444 1 4.1.967c1.7-.023 2.776-1.513 3.792-3.037a12.748 12.748 0 0 0 1.736-3.515 5.419 5.419 0 0 1-3.35-5.008z"
                            className="cls-2"
                            transform="translate(-9.984 -7.997)"
                          />
                          <path
                            id="XMLID_6_"
                            fill="var(--text-primary)"
                            d="M22.5 12.69a5.451 5.451 0 0 0 1.268-3.97 5.711 5.711 0 0 0-3.666 1.888 5.229 5.229 0 0 0-1.3 3.822 4.7 4.7 0 0 0 3.698-1.74z"
                            className="cls-2"
                            transform="translate(-8.734 -8.72)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.qlur.app&hl=en_US&gl=US"
                  style={{ margin: 0 }}
                  target="_blank"
                  rel="noreferrer noopener"
                  draggable="false"
                  className=""
                >
                  <svg
                    data-name="Button - Google Play - DM"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                  >
                    <circle data-name="Ellipse 311" cx={25} cy={25} r={25} fill="#fff" />
                    <g data-name="Group 7622">
                      <path
                        data-name="Path 3749"
                        d="M21.107 19.424 10.07 31.138v.007a2.983 2.983 0 0 0 4.391 1.8l.035-.021 12.423-7.168z"
                        transform="translate(6.102 4.978)"
                        fill="#ea4335"
                      />
                      <path
                        data-name="Path 3750"
                        d="m31.892 17.61-.01-.007-5.364-3.109-6.043 5.377 6.064 6.062 5.335-3.078a2.983 2.983 0 0 0 .018-5.245"
                        transform="translate(6.483 4.797)"
                        fill="#fbbc04"
                      />
                      <path
                        data-name="Path 3751"
                        d="M10.074 9.277a2.927 2.927 0 0 0-.1.767v20.7a2.871 2.871 0 0 0 .1.766L21.49 20.1z"
                        transform="translate(6.098 4.606)"
                        fill="#4285f4"
                      />
                      <path
                        data-name="Path 3752"
                        d="m21.189 20.472 5.711-5.711-12.408-7.194a2.986 2.986 0 0 0-4.421 1.785z"
                        transform="translate(6.102 4.527)"
                        fill="#34a853"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul> */}

            <p className="p-0 mx-0 mt-1 mb-0 text-center">
              <a
                href="/ios/health/"
                aria-label="Learn more about the Apple Health App"
                data-analytics-title="learn more about the apple health app"
                className="font-sans text-base font-normal tracking-normal cursor-pointer text-sky-600"
                style={{
                  lineHeight: '1.4211',
                  textDecoration: 'none',
                  quotes: '"“" "”"',
                }}
              >
                <span
                  className="static top-0 inline pl-1 not-italic leading-none tracking-wide"
                  style={{
                    fontFamily: '"SF Pro Icons"',
                    textDecoration: 'none',
                    zIndex: 1,
                    paddingInlineStart: '0.3em',
                    content: '""',
                    quotes: '"“" "”"',
                  }}
                />
              </a>
            </p>
          </div>

          <img
            src="/static/images/qlur_cover.png"
            className="relative top-2"
            style={{ width: ' 120%', 'max-width': 'fit-content', left: '-30px' }}
          />
        </div>

        <div>
          <div className="mt-20 mb-2 text-xl text-gray-800 uppercase font-extra-light dark:text-gray-400">
            {' '}
            Other products he has built
          </div>

          <div
            className="relative inline-block px-4 py-2 mt-4 mr-2 font-sans text-xs leading-none text-white uppercase align-baseline rounded-full select-none center whitespace-nowrap"
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
              <p className="block font-sans text-sm antialiased text-white capitalize">
                HowToReplyTo.com
              </p>
            </div>
          </div>

          <div
            className="relative inline-block px-4 py-2 mt-4 ml-0 ml-3 mr-2 font-sans text-xs leading-none text-white uppercase align-baseline rounded-full select-none center whitespace-nowrap"
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
              <p className="block font-sans text-sm antialiased text-white capitalize">
                ReplyBrain.com
              </p>
            </div>
          </div>

          <div
            className="relative inline-block px-4 py-2 mt-4 ml-0 ml-3 mr-2 font-sans text-xs leading-none text-white uppercase align-baseline rounded-full select-none center whitespace-nowrap"
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
              <p className="block font-sans text-sm antialiased text-white capitalize">
                LogoTip.Online (SOLD 2019)
              </p>
            </div>
          </div>

          <div
            className="relative inline-block px-4 py-2 mt-4 ml-0 ml-3 mr-2 font-sans text-xs leading-none text-white uppercase align-baseline rounded-full select-none center whitespace-nowrap"
            style={{
              background: '#4caf50',
            }}
          >
            <div className="absolute w-5 h-5 top-2/4 left-1 -translate-y-2/4">
              <img
                alt="replybrain.com"
                src="https://i.imgur.com/SOH9yRE.png"
                className="relative inline-block object-cover object-center w-5 h-5 translate-x-px translate-y-px rounded-full"
              />
            </div>
            <div className="mt-px ml-4">
              <p className="block font-sans text-sm antialiased text-white capitalize">
                Onside Goal (SOLD 2016)
              </p>
            </div>
          </div>

          <div className="pr-2 mt-4 font-serif text-sm italic text-gray-600">
            + helped a few more startups go from idea to MVP.
          </div>
        </div>

        <div className="mt-20 mb-2 text-xl text-gray-700 uppercase font-extralight dark:text-gray-400">
          {' '}
          Blog 📚
        </div>

        <div className="p-4 text-blue-700 rounded-md bg-blue-50" role="alert">
          <p className="font-bold">Beware the Product-Builder's Paradox</p>
          <p>
            Saurabh's blogs are brewing! Like hidden Easter eggs, they'll pop up just when you least
            expect.
          </p>
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
                          <h2 className="mb-2 text-2xl font-bold tracking-tight">
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
