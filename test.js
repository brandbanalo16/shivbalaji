fetch('http://localhost:3000/examination-room-furniture').then(r=>r.text()).then(t=>{ const matches = t.match(/<img[^>]+src=[^>]+>/g); console.log(matches.join('\n')) }).catch(console.error)
