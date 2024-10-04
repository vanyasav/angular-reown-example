import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { createAppKit } from '@reown/appkit'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-reown-example';

  ngOnInit() {
    // 1. Get a project ID at https://cloud.reown.com
    const projectId = 'YOUR_PROJECT_ID'

    const networks = [mainnet, arbitrum]

    // 2. Set up Wagmi adapter
    const wagmiAdapter = new WagmiAdapter({
      projectId,
      networks
    })

    // 3. Configure the metadata
    const metadata = {
      name: 'AppKit',
      description: 'AppKit Example',
      url: 'https://example.com', // origin must match your domain & subdomain
      icons: ['https://avatars.githubusercontent.com/u/179229932']
    }

    // 3. Create the modal
    createAppKit({
      adapters: [wagmiAdapter],
      networks: [mainnet, arbitrum],
      metadata,
      projectId,
      features: {
        analytics: true // Optional - defaults to your Cloud configuration
      }
    })
  }
}
