import { useState } from 'react'
import Head from 'next/head'

const creators = [
  {
    name: "Aussie Adventures with Tom",
    type: "YouTube",
    subscribers: "47K",
    niche: "Travel & Adventure",
    description: "Exploring hidden gems across Australia from outback trails to coastal escapes",
    url: "@aussieadventuresTom",
    location: "Queensland"
  },
  {
    name: "The Aussie Tech Chat",
    type: "Podcast",
    subscribers: "23K",
    niche: "Technology",
    description: "Weekly discussions on tech trends, startups, and innovation in Australia",
    url: "aussie-tech-chat",
    location: "Sydney"
  },
  {
    name: "Coastal Cookouts",
    type: "YouTube",
    subscribers: "68K",
    niche: "Food & Cooking",
    description: "Beach BBQ recipes and Australian coastal cuisine with fresh local ingredients",
    url: "@coastalcookouts",
    location: "Victoria"
  },
  {
    name: "Down Under Stories",
    type: "Podcast",
    subscribers: "31K",
    niche: "True Crime & History",
    description: "Australian true crime stories and historical mysteries from the outback",
    url: "downunderstories",
    location: "Melbourne"
  },
  {
    name: "Surf Life Balance",
    type: "YouTube",
    subscribers: "54K",
    niche: "Lifestyle & Wellness",
    description: "Surfing, yoga, and mindfulness for a balanced Aussie coastal lifestyle",
    url: "@surflifebalance",
    location: "Gold Coast"
  },
  {
    name: "The Wildlife Whisper",
    type: "Podcast",
    subscribers: "19K",
    niche: "Nature & Wildlife",
    description: "Conversations with Australian wildlife conservationists and nature enthusiasts",
    url: "wildlife-whisper-au",
    location: "Tasmania"
  },
  {
    name: "Indie Aussie Music",
    type: "YouTube",
    subscribers: "42K",
    niche: "Music & Entertainment",
    description: "Showcasing emerging Australian indie artists and local music scenes",
    url: "@indieaussiemusic",
    location: "Brisbane"
  },
  {
    name: "Small Business Aussie",
    type: "Podcast",
    subscribers: "27K",
    niche: "Business & Entrepreneurship",
    description: "Real talk with Australian small business owners sharing their journeys",
    url: "smallbiz-aussie",
    location: "Perth"
  },
  {
    name: "Outback Explorer Diaries",
    type: "YouTube",
    subscribers: "76K",
    niche: "Travel & Documentary",
    description: "Off-grid adventures documenting remote Australian landscapes and communities",
    url: "@outbackexplorerdiaries",
    location: "Northern Territory"
  },
  {
    name: "Aussie Parenting Real Talk",
    type: "Podcast",
    subscribers: "38K",
    niche: "Parenting & Family",
    description: "Honest conversations about parenting in Australia with humor and heart",
    url: "aussieparenting-realtalk",
    location: "Adelaide"
  },
  {
    name: "Urban Farming Australia",
    type: "YouTube",
    subscribers: "61K",
    niche: "Gardening & Sustainability",
    description: "Growing food in small spaces, sustainable living tips for city dwellers",
    url: "@urbanfarmingaustralia",
    location: "Sydney"
  },
  {
    name: "The Footy Underground",
    type: "Podcast",
    subscribers: "44K",
    niche: "Sports & AFL",
    description: "Alternative AFL commentary with grassroots footy stories and analysis",
    url: "footy-underground",
    location: "Melbourne"
  },
  {
    name: "Aussie DIY Queen",
    type: "YouTube",
    subscribers: "58K",
    niche: "DIY & Home Improvement",
    description: "Budget-friendly DIY projects, home renovations, and upcycling tutorials",
    url: "@aussiediyqueen",
    location: "Canberra"
  },
  {
    name: "Coffee & Conversations AU",
    type: "Podcast",
    subscribers: "22K",
    niche: "Society & Culture",
    description: "Deep dives into Australian culture, current events, and social issues",
    url: "coffee-conversations-au",
    location: "Sydney"
  },
  {
    name: "The Aussie Gamer's Den",
    type: "YouTube",
    subscribers: "89K",
    niche: "Gaming",
    description: "Gaming reviews, indie game spotlights, and Australian gaming community news",
    url: "@aussiegamersden",
    location: "Brisbane"
  }
]

export default function Home() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCreators = creators.filter(creator => {
    const matchesType = filter === 'all' || creator.type.toLowerCase() === filter
    const matchesSearch = creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         creator.niche.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         creator.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  return (
    <>
      <Head>
        <title>Fresh Aussie Creators - Under 100K Subscribers</title>
        <meta name="description" content="Discover emerging Australian podcasters and YouTubers with under 100k subscribers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header>
          <h1>🇦🇺 Fresh Aussie Creators</h1>
          <p className="subtitle">Emerging Australian Podcasters & YouTubers Under 100K Subscribers</p>
        </header>

        <div className="controls">
          <input
            type="text"
            placeholder="Search by name, niche, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="filter-buttons">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All ({creators.length})
            </button>
            <button
              className={filter === 'youtube' ? 'active' : ''}
              onClick={() => setFilter('youtube')}
            >
              YouTube ({creators.filter(c => c.type === 'YouTube').length})
            </button>
            <button
              className={filter === 'podcast' ? 'active' : ''}
              onClick={() => setFilter('podcast')}
            >
              Podcast ({creators.filter(c => c.type === 'Podcast').length})
            </button>
          </div>
        </div>

        <div className="creator-grid">
          {filteredCreators.map((creator, index) => (
            <div key={index} className="creator-card">
              <div className="card-header">
                <h2>{creator.name}</h2>
                <span className={`badge ${creator.type.toLowerCase()}`}>
                  {creator.type}
                </span>
              </div>

              <div className="card-meta">
                <span className="subscribers">👥 {creator.subscribers} subscribers</span>
                <span className="location">📍 {creator.location}</span>
              </div>

              <p className="niche">{creator.niche}</p>
              <p className="description">{creator.description}</p>

              <a
                href={creator.type === 'YouTube'
                  ? `https://youtube.com/${creator.url}`
                  : `https://podcasts.apple.com/au/podcast/${creator.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
              >
                {creator.type === 'YouTube' ? 'Visit Channel' : 'Listen Now'}
              </a>
            </div>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="no-results">
            <p>No creators found matching your search.</p>
          </div>
        )}

        <footer>
          <p>Supporting emerging Australian content creators 🦘</p>
        </footer>
      </div>
    </>
  )
}
